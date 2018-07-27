import Home from './containerHome.jsx'

class Container extends React.Component {
    /*setup() {
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
    }*/
    render() {
        return (<Home />);
    }
}
export default Container;