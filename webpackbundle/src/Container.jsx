import Addsong from './containerAddsong.jsx'
import History from './containerHistory.jsx'
import Home from './containerHome.jsx'
import Myfavorite from './containerMyfavorite.jsx'
import Playlist from './containerPlaylist.jsx'
import Searchresult from './containerSearchresult.jsx'
import Song from './containerSong.jsx'

import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch
} from 'react-router-dom';
class Container extends React.Component {
	render() {
		return (
			<main>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/searchresult' component={Searchresult} />
					<Route exact path='/addsong' component={Addsong} />
					<Route path='/addsong/:number' component={Addsong} />
					<Route path='/history' component={History} />
					<Route path='/myfavorite' component={Myfavorite} />
					<Route path='/playlist' component={Playlist} />
					<Route path='/searchresult/:number' component={Searchresult} />
					<Route path='/song/:number' component={Song} />
				</Switch>
			</main>
		);
	}
}
export default Container;