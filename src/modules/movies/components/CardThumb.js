import React, { PropTypes } from 'react';
import {
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native';

const CardThumb = ({ info }) => (
	<TouchableOpacity>
		<View style={styles.cardThumbContainer}>
			<Image source={{ uri: `https://image.tmdb.org/t/p/w185/${info.poster_path}` }} style={styles.cardThumbImage} />
			<View style={styles.cardThumbTitleContainer}>
				<Text style={styles.cardThumbTitle} numberOfLines={2}>
					{info.original_title}
				</Text>
			</View>
		</View>
	</TouchableOpacity>
);

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
		height: 184
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

export default CardThumb;