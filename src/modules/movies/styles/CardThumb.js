import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	cardThumbContainer: {
		height: 231,
		width: 135,
		backgroundColor: 'white',
		flexDirection: 'column',
		marginRight: 10,
		borderRadius: 2
	},
	cardThumbImage: {
		width: 135,
		height: 184,
		borderTopLeftRadius: 2,
		borderTopRightRadius: 2
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