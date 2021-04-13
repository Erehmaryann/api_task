import React from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';

const Cards = ({ movieData }) => {
	return (
		<div>
			<h1>This is the cards route</h1>
			{movieData && movieData.map((movie) => <Card movie={movie} />)}
			<Link to="/">Go to home</Link>
		</div>
	);
};

export default Cards;
