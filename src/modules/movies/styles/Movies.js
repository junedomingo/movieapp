import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'black'
	},
	progressBar: {
		backgroundColor: 'black',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	listHeading: {
		paddingHorizontal: 16,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 15,
		marginTop: 30
	},
	listHeadingLeft: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 18
	},
	listHeadingRight: {
		color: 'white',
		fontSize: 16
	}
});

export default styles;