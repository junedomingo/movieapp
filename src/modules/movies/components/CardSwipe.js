import React, { PropTypes } from 'react';
import {
	Image,
	StyleSheet,
	Text,
	TouchableNativeFeedback,
	View
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

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

const styles = StyleSheet.create({
	linearGradient: {
		top: 0,
		left: 0,
		right: 0,
		height: 248,
		position: 'absolute'
	},
	imageBackdrop: {
		flex: 1,
		height: 248,
		backgroundColor: 'black'
	},
	cardContainer: {
		position: 'absolute',
		top: 32,
		right: 16,
		left: 16,
		flexDirection: 'row'
	},
	cardImage: {
		height: 184,
		width: 135,
		borderRadius: 3
	},
	cardDetails: {
		paddingLeft: 10,
		flex: 1
	},
	cardTitle: {
		color: 'white',
		fontSize: 19,
		fontWeight: '500',
		paddingTop: 10
	},
	cardGenre: {
		flexDirection: 'row'
	},
	cardGenreItem: {
		fontSize: 11,
		marginRight: 5,
		color: 'white'
	},
	cardDescription: {
		color: '#f7f7f7',
		fontSize: 13,
		marginTop: 5
	},
	cardNumbers: {
		flexDirection: 'row',
		marginTop: 5
	},
	cardStar: {
		flexDirection: 'row'
	},
	cardStarRatings: {
		marginLeft: 5,
		fontSize: 12,
		color: 'white'
	},
	cardRunningHours: {
		marginLeft: 5,
		fontSize: 12
	},
	viewButton: {
		justifyContent: 'center',
		padding: 10,
		borderRadius: 3,
		backgroundColor: 'red',
		width: 100,
		height: 30,
		marginTop: 10
	},
	viewButtonText: {
		color: 'white'
	}
});

CardSwipe.propTypes = {
	info: PropTypes.object.isRequired
};

export default CardSwipe;
