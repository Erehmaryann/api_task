import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './style/CardStyle';

function Card(props) {
	const { movie, classes } = props;
	return (
		<div key={movie.char_id} className={classes.Card}>
			<h2 className={classes.CardTitle}>{movie.name}</h2>
			<div className={classes.CardImg}>
				<img src={movie.img} alt={movie.name} />
			</div>
			<div className={classes.CardData}>Birthday: {movie.birthday}</div>
			<div className={classes.CardData}>Portrayed: {movie.portrayed}</div>
			<div className={classes.CardData}>Status: {movie.status}</div>
		</div>
	);
}

export default withStyles(styles)(Card);
