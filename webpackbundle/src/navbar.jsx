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

class NavBar extends React.Component {
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
                <li class="nav-item"></li><a href="profile" class="nav-link">個人檔案<span class="badge badge-warning ml-1">!</span></a>
                <li class="nav-item"></li><a href="playlist" class="nav-link">歌曲列表</a>
                <li class="nav-item"></li><a href="#" class="nav-link">我的最愛(無)</a>
                <li class="nav-item"></li><a href="#" class="nav-link">播放紀錄(無)</a>
                <li class="nav-item"></li><a href="playlist" class="nav-link">播放清單</a>
                <li class="nav-item"></li><a href="addsong" class="nav-link">新增歌曲</a>
                <li class="nav-item"></li><a href="song" class="nav-link">歌曲(暫時)</a>
                <li class="nav-item"></li><a href="searchresult" class="nav-link">搜尋結果(暫時)</a>
                <li class="nav-item"></li><a onClick={this.logout} class="nav-link">登出</a>
            </ul>
        );
    }
}

class NavBarGuest extends React.Component {
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
    }
    setState() {
        let idToken = localStorage.getItem("id_token");
        if (idToken) {
            this.loggedIn = true;
        } else {
            this.loggedIn = false;
        }
    }
    componentWillMount() {
        this.setup();
        this.parseHash();
        this.setState();
    }
    render() {
        //vavbar container
        return (
            //menulogin.jade
            <ul id="navbar-menu" class="navbar-nav">
                <li class="nav-item"></li><a href="#" class="nav-link">登入</a>
                <li class="nav-item"></li><a href="#" class="nav-link">歌曲列表</a>
            </ul>
        );
    }
}

export default NavBar;