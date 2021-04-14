import React from 'react';
import Card from './Card';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import styles from './style/LandingPageStyle';

const LandingPage = (props) => {
	const { movieData, classes } = props;
	return (
		<div className={classes.LandingPage}>
			<h1>List Of Some Characters In Breaking Bad Series</h1>
			<div className={classes.LandingPageCards}>
				{movieData && movieData.slice(0, 6).map((movie) => <Card movie={movie} />)}
			</div>
			<Link to="/cards">View all</Link>
		</div>
	);
};

export default withStyles(styles)(LandingPage);
