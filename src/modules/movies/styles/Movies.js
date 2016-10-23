import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'black'
	},
	progressBar: {
		backgroundColor: '#0a0a0a',
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
	},
	browseList: {
		marginTop: 30,
		paddingHorizontal: 16,
		marginBottom: 30
	},
	browseListItem: {
		paddingVertical: 10,
		flexDirection: 'row'
	},
	browseListItemText: {
		flex: 1,
		color: 'white',
		paddingLeft: 10,
		fontSize: 16,
		fontWeight: '100'
	}
});

export default styles;