/* eslint-disable import/no-anonymous-default-export */
export default {
	Card      : {
		textAlign       : 'center',
		backgroundColor : 'white',
		borderRadius    : '5px',
		width           : '300px',
		padding         : '10px',
		margin          : '1rem',
		boxShadow       : '7px 10px 12px -5px rgba(0, 0, 0, 0.56)',
		transition      : 'all ease-in-out 500ms',
		'&:hover'       : {
			transform : 'scale(0.9)',
			cursor    : 'pointer',
			opacity   : '0.8'
		},
		'& Img'         : {
			width        : '100%',
			height       : '100%',
			borderRadius : '5px'
		}
	},

	CardData  : {
		fontSize : '80%'
	},

	CardImg   : {
		display         : 'flex',
		justifyContent  : 'center',
		alignItems      : 'center',
		height          : '300px',
		backgroundColor : '#eceff1',
		marginBottom    : '1rem'
	},
	CardTitle : {
		fontSize     : '1.5rem',
		fontWeight   : 'bold',
		marginBottom : '1rem'
	}
};
