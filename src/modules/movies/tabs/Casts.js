import React, { PropTypes } from 'react';
import {
	Text,
	View,
	Image
} from 'react-native';

import { TMDB_IMG_URL } from '../../../constants/api';
import styles from './styles/Casts';

const Casts = ({ info, getTabHeight }) => {
	let computedHeight = (80 + 15) * info.casts.cast.length; // (castImage.height + castContainer.marginBottom)
	computedHeight += 447 + 40; // Header height + container ((20 paddingVertical) = 40)
	return (
		<View style={styles.container} onLayout={getTabHeight.bind(this, 'casts', computedHeight)}>
			{
				info.casts.cast.map(item => (
					<View key={item.id} style={styles.castContainer}>
						<Image source={{ uri: `${TMDB_IMG_URL}/w185/${item.profile_path}` }} style={styles.castImage} />
						<View style={styles.characterContainer}>
							<Text style={styles.characterName}>
								{item.name}
							</Text>
							<Text style={styles.asCharacter}>
								{item.character && `as ${item.character}`}
							</Text>
						</View>
					</View>
				))
			}
		</View>
	);
};

Casts.propTypes = {
	info: PropTypes.object.isRequired,
	getTabHeight: PropTypes.func.isRequired
};

export default Casts;
