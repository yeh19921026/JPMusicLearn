import NavBar from './navbar.jsx'
import Container from './container.jsx'
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
import jwtdecode from 'jwt-decode';

const AUTH0_CLIENT_ID = "KF8oNwg3qrbhlT5pMeuJ5OL0IAiIt5PZ"
const AUTH0_DOMAIN = "tses.auth0.com"
const AUTH0_CALLBACK_URL = "http://localhost:3000/";//location.href;
const AUTH0_API_AUDIENCE = "https://tses.auth0.com/api/v2/"

class App extends React.Component {
	parseHash() {
		this.auth0 = new auth0.WebAuth({
			domain: AUTH0_DOMAIN,
			clientID: AUTH0_CLIENT_ID
		});
		this.auth0.parseHash(window.location.hash, (err, authResult) => {
			if (err) {
				return console.log(err);
			}
			if (
				authResult !== null &&
				authResult.accessToken !== null &&
				authResult.idToken !== null
			) {
				localStorage.setItem("access_token", authResult.accessToken);
				localStorage.setItem("id_token", authResult.idToken);
				localStorage.setItem("profile", JSON.stringify(authResult.idTokenPayload));
				window.location = window.location.href.substr(0, window.location.href.indexOf("#"));
			}
		});
	}
	setup() {
		$.ajaxSetup({
			beforeSend: (r) => {
				if (localStorage.getItem("access_token")) {
					r.setRequestHeader("Authorization", "Bearer " + localStorage.getItem("access_token"));
				}
			}
		});
		if (localStorage.getItem("access_token")) {
			$.get("http://localhost:3000/api/usersetting", res => {
				localStorage.setItem("user_setting", res);
			});
		}
	}
	pushUserinfo() {
		if (localStorage.getItem("id_token")) {
			var userinfo = jwtdecode(localStorage.getItem("id_token"));
			console.log(userinfo);
			$.ajax({
				type: 'POST',//GET or POST
				url:
					AUTH0_CALLBACK_URL + "api/updateuserinfo",//請求的頁面
				cache: false,//防止抓到快取的回應
				contentType: "application/json;charset=utf-8", data: JSON.stringify(userinfo),
				success: function (msg) {
					console.log("msg = " + msg);

					//當請求成功後此事件會被呼叫
					for (var i = 0; i < msg.length; i++) {
						console.log("name=" + msg[i]["欄位名稱"]);
					}
					//localStorage.setItem("",msg);
				},
				error: function (xhr, ajaxOpetion, thrownError) {
					//當請求失敗後此事件會被呼叫.
					console.log(xhr.status);
					console.log(thrownError);
				},
				statusCode: {//狀態碼處理
					404: function () {
						alert("error");
					}
				}
			});
		}
	}
	componentWillMount() {
		this.setup();
		this.parseHash();
		this.pushUserinfo();
	}
	render() {
		return (
			<div>
				<NavBar />
				<Container />
			</div>
		);
	}
}

ReactDOM.render((
	<Router>
		<App />
	</Router>), document.getElementById('app'));

