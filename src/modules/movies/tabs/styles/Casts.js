import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		paddingTop: 20,
		paddingHorizontal: 16
	},
	castContainer: {
		flexDirection: 'row',
		marginBottom: 15
	},
	castImage: {
		width: 80,
		height: 80,
		borderRadius: 80 / 2
	},
	characterContainer: {
		flex: 1,
		justifyContent: 'center',
		paddingLeft: 16
	},
	characterName: {
		color: 'white',
		flexDirection: 'column',
		fontSize: 16,
		fontWeight: '500'
	},
	asCharacter: {
		color: '#999'
	}
});

export default styles;
