/* eslint-disable react/no-did-update-set-state */
import React, {
	PropTypes,
	Component
} from 'react';
import {
	ScrollView,
	View,
	Text,
	TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from './styles/Movies';
import * as moviesActions from './movies.actions';
import ProgressBar from '../_global/ProgressBar';
import CardThumb from './components/CardThumb';
import CardSwipe from './components/CardSwipe';

class Movies extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true
		};
	}

	componentWillMount() {
		this.props.actions.retrieveNowPlayingMovies();
		this.props.actions.retrievePopularMovies();
	}

	componentDidUpdate() {
		if (this.state.isLoading !== false) {
			this.setState({ isLoading: false });
		}
	}

	_seeMoviesList(type, title) {
		this.props.navigator.showModal({
			title,
			screen: 'movieapp.MoviesList',
			navigatorStyle: {
				statusBarColor: 'black',
				statusBarTextColorScheme: 'light',
				navBarBackgroundColor: '#0a0a0a',
				navBarTextColor: 'white',
				navBarButtonColor: 'white'
			},
			passProps: {
				type
			}
		});
	}

	render() {
		const { nowPlayingMovies, popularMovies } = this.props;
		const iconPlay = (<Icon name="md-play" size={21} color="#9F9F9F" style={{ paddingLeft: 3, width: 22 }} />);
		const iconTop = (<Icon name="md-trending-up" size={21} color="#9F9F9F" style={{ width: 22 }} />);
		const iconUp = (<Icon name="md-recording" size={21} color="#9F9F9F" style={{ width: 22 }} />);

		return (this.state.isLoading ? <View style={styles.progressBar}><ProgressBar /></View> :
			<ScrollView style={styles.container}>
				<Swiper
					autoplay
					autoplayTimeout={4}
					showsPagination={false}
					height={248}>
					{nowPlayingMovies.results.map(info => (
						<CardSwipe key={info.id} info={info} />
					))}
				</Swiper>

				<View>
					<View style={styles.listHeading}>
						<Text style={styles.listHeadingLeft}>Popular</Text>
						<TouchableOpacity>
							<Text
								style={styles.listHeadingRight}
								onPress={this._seeMoviesList.bind(this, 'popular', 'Popular')}>
								See all
							</Text>
						</TouchableOpacity>
					</View>
					<ScrollView horizontal showsHorizontalScrollIndicator={false}>
						{popularMovies.results.map(info => (
							<CardThumb key={info.id} info={info} />
						))}
					</ScrollView>
					<View style={styles.browseList}>
						<TouchableOpacity activeOpacity={0.7}>
							<View style={styles.browseListItem}>
								{iconPlay}
								<Text
									style={styles.browseListItemText}
									onPress={this._seeMoviesList.bind(this, 'now_playing', 'Now Playing')}>
									Now Playing
								</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity activeOpacity={0.7}>
							<View style={styles.browseListItem}>
								{iconTop}
								<Text style={styles.browseListItemText} onPress={this._seeMoviesList.bind(this, 'top_rated', 'Top Rated')}>
									Top Rated
								</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity activeOpacity={0.7}>
							<View style={styles.browseListItem}>
								{iconUp}
								<Text
									style={styles.browseListItemText}
									onPress={this._seeMoviesList.bind(this, 'upcoming', 'Upcoming')}>
									Upcoming
								</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		);
	}
}

Movies.propTypes = {
	actions: PropTypes.object.isRequired,
	nowPlayingMovies: PropTypes.object.isRequired,
	popularMovies: PropTypes.object.isRequired,
	navigator: PropTypes.object
};

function mapStateToProps(state, ownProps) {
	return {
		nowPlayingMovies: state.movies.nowPlayingMovies,
		popularMovies: state.movies.popularMovies
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(moviesActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
