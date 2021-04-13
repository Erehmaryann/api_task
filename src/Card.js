import React from 'react';

export default function Card({ movie }) {
	return (
		<div key={movie.char_id}>
			<img src={movie.img} alt={movie.name} />
			<h2>Name: {movie.name}</h2>
			<h4>Birthday: {movie.birthday}</h4>
			<h4>Portrayed: {movie.portrayed}</h4>
			<h4>Status: {movie.status}</h4>
		</div>
	);
}
// Please can you start all over here?
