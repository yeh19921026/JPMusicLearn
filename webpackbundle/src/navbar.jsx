import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
const AUTH0_CLIENT_ID = "KF8oNwg3qrbhlT5pMeuJ5OL0IAiIt5PZ"
const AUTH0_DOMAIN = "tses.auth0.com"
const AUTH0_CALLBACK_URL = "http://localhost:3000/";//location.href;
const AUTH0_API_AUDIENCE = "https://tses.auth0.com/api/v2/"

class NavBar extends React.Component {
    setState() {
        let idToken = localStorage.getItem("id_token");
        if (idToken) {
            this.loggedIn = true;
        } else {
            this.loggedIn = false;
        }
    }
    componentWillMount() {
        this.setState();
    }
    render() {
        //vavbar container
        return (
            <nav id="navGroup" class="navbar navbar-expand-lg navbar-dark fixed-top bg-dark nav-fill">
                <button data-parent="#navGroup" data-target="#navbarCollapse" data-toggle="collapse" type="button" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"><span class="fa fa-bars"></span></button>
                <button data-parent="#navGroup" data-target="#searchbarCollapse" data-toggle="collapse" type="button" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"><span aria-hidden="true" class="fa fa-search"></span></button>
                <div id="navbarCollapse" class="collapse navbar-collapse text-center"><a href="home" class="navbar-brand ml-lg-0 ml-3">JPMusicLearn</a>
                    {this.loggedIn ? <NavBarLogin /> : <NavBarGuest />}
                </div>
                <div id="searchbarCollapse" class="collapse navbar-collapse">
                    <form class="nav-item input-group mt-2 mt-md-0">
                        <input type="text" aria-label="Search" placeholder="搜尋" class="form-control mr-sm-2" />
                        <button type="submit" class="btn btn-outline-success my-2 my-sm-0">搜尋</button>
                    </form>
                </div>
            </nav>);
    }
}

class NavBarLogin extends React.Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }
    logout() {
        localStorage.removeItem("id_token");
        localStorage.removeItem("access_token");
        localStorage.removeItem("profile");
        location.reload();
    }
    render() {
        return (
            //menulogin.jade
            <ul id="navbar-menu" class="navbar-nav">
                <li class="nav-item">
                    <Link to="/profile" class="nav-link">個人檔案<span class="badge badge-warning ml-1">!</span></Link>
                </li>
                <li class="nav-item">
                    <Link to="/searchresult" class="nav-link">歌曲列表</Link>
                </li>
                <li class="nav-item">
                    <Link to="/myfavorite" class="nav-link">我的最愛(無)</Link>
                </li>
                <li class="nav-item">
                    <Link to="/history" class="nav-link">播放紀錄(無)</Link>
                </li>
                <li class="nav-item">
                    <Link to="/playlist" class="nav-link">播放清單</Link>
                </li>
                <li class="nav-item">
                    <Link to="/addsong" class="nav-link">新增歌曲</Link>
                </li>
                <li class="nav-item">
                    <Link to="/song" class="nav-link">歌曲(暫時)</Link>
                </li>
                <li class="nav-item">
                    <Link to="/searchresult" class="nav-link">搜尋結果(暫時)</Link>
                </li>
                <li class="nav-item"><a href="#" onClick={this.logout} class="nav-link">登出</a></li>
            </ul>
        );
    }
}

class NavBarGuest extends React.Component {
    constructor(props) {
        super(props);
        this.authenticate = this.authenticate.bind(this);
    }
    authenticate() {
        this.WebAuth = new auth0.WebAuth({
            domain: AUTH0_DOMAIN,
            clientID: AUTH0_CLIENT_ID,
            scope: "openid profile email",
            audience: AUTH0_API_AUDIENCE,
            responseType: "token id_token",
            redirectUri: AUTH0_CALLBACK_URL
        });
        localStorage.setItem("authredirectUri",location.href);
        this.WebAuth.authorize();
    }
    render() {
        //vavbar container
        return (
            //menulogin.jade
            <ul id="navbar-menu" class="navbar-nav">
                <li class="nav-item"><a href="#" class="nav-link" onClick={this.authenticate}>登入</a></li>
                <li class="nav-item">
                    <Link to="/searchresult" class="nav-link">歌曲列表</Link>
                </li>
            </ul>
        );
    }
}

export default NavBar;