/* eslint-disable new-cap */
import React, { PropTypes, Component } from 'react';
import {
	Image,
	Text,
	TouchableOpacity,
	View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';

import styles from '../styles/CardMovie';

const iconStar = (<Icon name="md-star" size={16} color="#F5B642" />);

class CardMovie extends Component {

	constructor(props) {
		super(props);

		// console.log(this.props.moviesGenres);
	}
	// getGenre(ids) {
	// 	const genre_ids = this.props.moviesGenres;
	// 	return
	// }

	render() {
		const { info } = this.props;
		return (
			<View style={styles.cardContainer}>
				<TouchableOpacity activeOpacity={0.9}>
					<View style={styles.card}>
						<Image source={{ uri: `https://image.tmdb.org/t/p/w185/${info.poster_path}` }} style={styles.cardImage} />
						<View style={styles.cardDetails}>
							<Text
								style={styles.cardTitle}
								numberOfLines={3}>
								{info.original_title}
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
				</TouchableOpacity>
			</View>
		);
	}
}

CardMovie.propTypes = {
	info: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		moviesGenres: state.movies.genres
	};
}

export default connect(mapStateToProps, null)(CardMovie);