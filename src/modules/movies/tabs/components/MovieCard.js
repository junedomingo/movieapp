/* eslint-disable new-cap */
import React, { PropTypes, Component } from 'react';
import {
	Image,
	StyleSheet,
	Text,
	TouchableNativeFeedback,
	View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';

const iconStar = (<Icon name="md-star" size={16} color="#F5B642" />);

class MovieCard extends Component {

	constructor(props) {
		super(props);
	}
	// getGenre(ids) {
	// 	const genre_ids = this.props.moviesGenres;
	// 	return
	// }

	render() {
		const { info } = this.props;
		return (
			<View style={styles.cardContainer}>
				<TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}>
					<View style={styles.card}>
						<Image source={{ uri: `https://image.tmdb.org/t/p/w185/${info.poster_path}` }} style={styles.cardImage} />
						<View style={styles.cardDetails}>
							<Text
								style={styles.cardTitle}
								numberOfLines={3}>
								{info.original_title.toUpperCase()}
							</Text>
							<View style={styles.cardGenre}>
								{
									info.genre_ids.map(item => <Text key={item} style={styles.cardGenreItem}>{item}</Text>)
								}
							</View>
							<View style={styles.cardNumbers}>
								<View style={styles.cardStar}>
									{iconStar}
									<Text style={styles.cardStarRatings}>{info.vote_average.toFixed(1)}</Text>
								</View>
								<Text style={styles.cardRunningHours} />
							</View>
							<Text style={styles.cardDescription} numberOfLines={3}>
								{info.overview}
							</Text>
						</View>
					</View>
				</TouchableNativeFeedback>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	cardContainer: {
		flex: 1,
		marginBottom: 5
	},
	card: {
		backgroundColor: 'white',
		borderRadius: 3,
		marginTop: 7,
		minHeight: 148,
		flexDirection: 'row',
		paddingRight: 16
	},
	cardDetails: {
		paddingLeft: 10,
		flex: 1
	},
	cardImage: {
		height: 163,
		width: 120,
		borderRadius: 3
	},
	cardTitle: {
		color: 'black',
		fontSize: 13,
		fontWeight: '500',
		paddingTop: 10
	},
	cardGenre: {
		flexDirection: 'row'
	},
	cardGenreItem: {
		fontSize: 11,
		marginRight: 5
	},
	cardDescription: {
		color: '#636363',
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
		fontSize: 12
	},
	cardRunningHours: {
		marginLeft: 5,
		fontSize: 12
	}
});

MovieCard.propTypes = {
	info: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		moviesGenres: state.movies.genres
	};
}

export default connect(mapStateToProps, null)(MovieCard);