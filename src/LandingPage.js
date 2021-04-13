import React from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';

const LandingPage = ({ movieData }) => {
	return (
		<div>
			<h1>This is the landing page</h1>
			{movieData && movieData.slice(0, 6).map((movie) => <Card movie={movie} />)}
			<Link to="/cards">View all</Link>
		</div>
	);
};

export default LandingPage;
