import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	cardThumbContainer: {
		height: 231,
		width: 135,
		backgroundColor: 'white',
		flexDirection: 'column',
		marginRight: 10,
		borderRadius: 3
	},
	cardThumbImage: {
		width: 135,
		height: 184,
		borderTopLeftRadius: 3,
		borderTopRightRadius: 3
	},
	cardThumbTitleContainer: {
		flex: 1,
		justifyContent: 'center'
	},
	cardThumbTitle: {
		color: 'black',
		fontSize: 13,
		fontWeight: '500',
		textAlign: 'center',
		paddingHorizontal: 1
	}
});

export default styles;