import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		paddingTop: 20,
		paddingHorizontal: 16,
		paddingBottom: 25
	},
	overview: {
		marginBottom: 15
	},
	overviewText: {
		color: '#d2d2d2',
		fontSize: 14,
		paddingTop: 10,
		lineHeight: 22
	},
	label: {
		color: 'white',
		fontSize: 16,
		fontWeight: '500'
	},
	value: {
		color: '#d2d2d2',
		fontSize: 14
	},
	labelRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingTop: 10
	}
});

export default styles;