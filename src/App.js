import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import Cards from './Cards';

function App() {
	return (
		<Router>
			<Switch>
				<Route component={LandingPage} path="/" exact />
				<Route component={Cards} path="/cards" exact />
			</Switch>
		</Router>
	);
}
export default App;
