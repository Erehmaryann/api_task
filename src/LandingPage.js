import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
	return (
		<div>
			<h1>This is the landing page</h1>
			<Link to="/cards"></link>
		</div>
	);
};

export default LandingPage;
