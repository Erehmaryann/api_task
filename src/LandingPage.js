import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const LandingPage = ({ movieData }) => {
	let allMovies = [];

	useEffect(() => {
		for (let i = 0; i <= 6; i++) {
			allMovies.push(movieData[i]);
		}
	});

	return (
		<div>
			<h1>This is the landing page</h1>
			{/* {movieData && movies()} */}

			{movieData &&
				allMovies.map((movie) => {
					return (
						<div>
							<img src={movie.img} alt={movie.name} />
							<h1 key={movie.char_id}>{movie.name}</h1>
						</div>
					);
				})}
			<Link to="/cards">View all</Link>
		</div>
	);
};

export default LandingPage;
