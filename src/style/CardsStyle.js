/* eslint-disable import/no-anonymous-default-export */
export default {
	CardsCard : {
		display        : 'flex',
		justifyContent : 'space-evenly',
		flexWrap       : 'wrap',
		marginBottom   : '1.5rem'
	},
	Cards     : {
		textAlign : 'center',
		margin    : '2rem 0',
		'& a'     : {
			border          : '1px solid grey',
			padding         : '1rem 2.5rem',
			fontSize        : '1.2rem',
			textDecoration  : 'none',
			color           : 'white',
			fontWeight      : 'bold',
			backgroundColor : 'black',
			borderRadius    : '5px',
			'&:hover'       : {
				opacity : '0.8'
			}
		}
	}
};
