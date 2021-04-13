import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import Cards from './Cards';

function App() {
	const [ movieData, setMovieData ] = useState(null);

	useEffect(() => {
		(async () => {
			try {
				const url = 'https://breakingbadapi.com/api/characters';
				const result = await axios.get(url);
				setMovieData(result.data);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);
	return (
		<Router>
			<Switch>
				<Route path="/" exact>
					<LandingPage movieData={movieData} />
				</Route>
				<Route path="/cards" exact>
					<Cards movieData={movieData} />
				</Route>
			</Switch>
		</Router>
	);
}
export default App;
