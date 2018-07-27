import NavBar from './navbar.jsx'
import Container from './container.jsx'

const AUTH0_CLIENT_ID = "KF8oNwg3qrbhlT5pMeuJ5OL0IAiIt5PZ"
const AUTH0_DOMAIN = "tses.auth0.com"
const AUTH0_CALLBACK_URL = location.href;
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
                    r.setRequestHeader(
                        "Authorization",
                        "Bearer " + localStorage.getItem("access_token")
                    );
                }
            }
        });
        if (localStorage.getItem("access_token")) { }
        $.get("http://localhost:3000/api/usersetting", res => {
            localStorage.setItem("user_setting", res);
        });
    }
    componentWillMount() {
        this.setup();
        this.parseHash();
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
ReactDOM.render(<App />, document.getElementById('app'));

