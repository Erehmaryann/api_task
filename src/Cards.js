import React from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';

const Cards = () => {
	return (
		<div>
			<h1>This is the cards route</h1>
			<Card />
			<Link to="/">Go to home</Link>
		</div>
	);
};

export default Cards;
