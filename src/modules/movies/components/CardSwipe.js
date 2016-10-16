import React, { PropTypes } from 'react';
import {
	Image,
	Text,
	TouchableNativeFeedback,
	View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

import styles from '../styles/CardSwipe';

const iconStar = (<Icon name="md-star" size={16} color="#F5B642" />);

const CardSwipe = ({ info }) => (
	<View>
		<Image source={{ uri: `https://image.tmdb.org/t/p/w780/${(info.backdrop_path || info.poster_path)}` }} style={styles.imageBackdrop} />
		<LinearGradient colors={['rgba(0, 0, 0, 0.5)', 'rgba(0,0,0, 0.7)', 'rgba(0,0,0, 0.8)']} style={styles.linearGradient} />
		<View style={styles.cardContainer}>
			<Image source={{ uri: `https://image.tmdb.org/t/p/w185/${info.poster_path}` }} style={styles.cardImage} />
			<View style={styles.cardDetails}>
				<Text style={styles.cardTitle} numberOfLines={2}>
					{info.original_title}
				</Text>
				<View style={styles.cardGenre}>
					<Text style={styles.cardGenreItem}>Action</Text>
				</View>
				<View style={styles.cardNumbers}>
					<View style={styles.cardStar}>
						{iconStar}
						<Text style={styles.cardStarRatings}>8.9</Text>
					</View>
					<Text style={styles.cardRunningHours} />
				</View>
				<Text style={styles.cardDescription} numberOfLines={3}>
					{info.overview}
				</Text>
				<TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}>
					<View style={styles.viewButton}>
						<Text style={styles.viewButtonText}>View Details</Text>
					</View>
				</TouchableNativeFeedback>
			</View>
		</View>
	</View>
);

CardSwipe.propTypes = {
	info: PropTypes.object.isRequired
};

export default CardSwipe;
