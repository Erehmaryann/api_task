import React from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import styles from './style/CardsStyle';

const Cards = (props) => {
	const { movieData, classes } = props;
	return (
		<div className={classes.Cards}>
			<h1>List Of All Characters In Breaking Bad Series</h1>
			<div className={classes.CardsCard}>{movieData && movieData.map((movie) => <Card movie={movie} />)}</div>
			<Link to="/">Go to home</Link>
		</div>
	);
};

export default withStyles(styles)(Cards);
