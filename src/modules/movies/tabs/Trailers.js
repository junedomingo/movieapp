import React, { PropTypes } from 'react';
import {
	Text,
	View,
	Image,
	TouchableOpacity
} from 'react-native';
import _ from 'lodash';

import styles from './styles/Trailers';

const Trailers = ({ getTabHeight, youtubeVideos, openYoutube }) => {
	const trailers = _.take(youtubeVideos, 10);
	let computedHeight = (90 + 10) * youtubeVideos.length; // (thumbnail.height + thumbnailContainer.marginBottom)
	computedHeight += 447 + 40; // Header height + container ((20 paddingVertical) = 40)

	return (
		<View style={styles.container} onLayout={getTabHeight.bind(this, 'trailers', computedHeight)}>
			{
				trailers.map((item, index) => (
					<TouchableOpacity key={index} onPress={openYoutube.bind(this, `http://youtube.com/watch?v=${item.id}`)}>
						<View style={styles.thumbnailContainer}>
							<Image source={{ uri: `${item.snippet.thumbnails.medium.url}` }} style={styles.thumbnail} />
							<Text style={styles.title}>{item.snippet.title}</Text>
						</View>
					</TouchableOpacity>
				))
			}
		</View>
	);
};

Trailers.propTypes = {
	getTabHeight: PropTypes.func.isRequired,
	openYoutube: PropTypes.func,
	youtubeVideos: PropTypes.array
};

export default Trailers;
