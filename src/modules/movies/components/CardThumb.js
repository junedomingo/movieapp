import React, { PropTypes } from 'react';
import {
	Image,
	Text,
	TouchableOpacity,
	View
} from 'react-native';

import { IMG_URL } from '../../../constants/api';
import styles from './styles/CardThumb';

const CardThumb = ({ info, viewMovie }) => (
	<TouchableOpacity activeOpacity={0.8} onPress={viewMovie.bind(this, info.id)}>
		<View style={styles.cardThumbContainer}>
			<Image source={{ uri: `${IMG_URL}/w185/${info.poster_path}` }} style={styles.cardThumbImage} />
			<View style={styles.cardThumbTitleContainer}>
				<Text style={styles.cardThumbTitle} numberOfLines={2}>
					{info.original_title}
				</Text>
			</View>
		</View>
	</TouchableOpacity>
);

CardThumb.propTypes = {
	info: PropTypes.object.isRequired,
	viewMovie: PropTypes.func.isRequired
};

export default CardThumb;