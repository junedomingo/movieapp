import React, { PropTypes } from 'react';
import {
	Image,
	Text,
	TouchableOpacity,
	View
} from 'react-native';

import styles from '../styles/CardThumb';

const CardThumb = ({ info }) => (
	<TouchableOpacity activeOpacity={0.8}>
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

CardThumb.propTypes = {
	info: PropTypes.object.isRequired
};

export default CardThumb;