import React, { Component, PropTypes } from 'react';
import {
	Image,
	RefreshControl,
	ScrollView,
	Text,
	View
} from 'react-native';
// import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Swiper from 'react-native-swiper';

import * as moviesActions from './movies.actions';
import { IMG_URL } from '../../constants/api';
import Casts from './tabs/Casts';
import DefaultTabBar from '../_global/scrollableTabView/DefaultTabBar';
import Info from './tabs/Info';
import ProgressBar from '../_global/ProgressBar';
import styles from './styles/Movie';
// import Similar from './tabs/Similar';

class Movie extends Component {
	constructor(props) {
		super(props);

		this.state = {
			castsTabHeight: null,
			heightAnim: null,
			infoTabHeight: null,
			isLoading: true,
			isRefreshing: false,
			showSimilarMovies: true,
			similarToTabHeight: null,
			tab: 0
		};

		this._getTabHeight = this._getTabHeight.bind(this);
		this._onChangeTab = this._onChangeTab.bind(this);
		this._onContentSizeChange = this._onContentSizeChange.bind(this);
		this._onRefresh = this._onRefresh.bind(this);
		this._onScroll = this._onScroll.bind(this);
		this._viewMovie = this._viewMovie.bind(this);
	}

	componentWillMount() {
		this._retrieveDetails();
		this._retrieveSimilarMovies();
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.details) this.setState({ isLoading: false });
	}

	// shouldComponentUpdate(nextProps, nextState) {
	// 	console.log('nextProps', nextProps);
	// 	console.log('nextState', nextState);
	//
	// 	if (this.props.movieId !== this.state.movieId && this.state.movieId !== nextState.movieId) {
	// 		this._retrieveDetails();
	// 	}
	//
	// 	return nextState.movieId === this.state.movieId
	// 	// return true;
	// }

	_retrieveDetails(isRefreshed) {
		this.props.actions.retrieveMovieDetails(this.props.movieId);
		if (isRefreshed && this.setState({ isRefreshing: false }));
	}

	_retrieveSimilarMovies() {
		this.props.actions.retrieveSimilarMovies(this.props.movieId, 1);
	}

	_onRefresh() {
		this.setState({ isRefreshing: true });
		this._retrieveDetails('isRefreshed');
	}

	_onScroll(event) {
		const contentOffsetY = event.nativeEvent.contentOffset.y.toFixed();
		if (contentOffsetY > 150) {
			this._toggleNavbar('hidden');
		} else {
			this._toggleNavbar('shown');
		}
	}

	_toggleNavbar(status) {
		this.props.navigator.toggleNavBar({
			to: status,
			animated: true
		});
	}

	_onChangeTab({ i, ref }) {
		this.setState({ tab: i });
	}

	/*
	* ScrollView onContentSizeChange prop
	*/
	_onContentSizeChange(width, height) {
		if (this.state.tab === 0 && this.state.infoTabHeight === this.state.castsTabHeight) {
			this.setState({ infoTabHeight: height });
		}
	}

	_getTabHeight(tabName, height) {
		if (tabName === 'casts') this.setState({ castsTabHeight: height });
		if (tabName === 'similarTo') this.setState({ similarToTabHeight: height });
	}

	_viewMovie(movieId) {
		this.props.navigator.push({
			screen: 'movieapp.Movie',
			passProps: {
				movieId
			},
			backButtonTitle: 'Hello'
		});
	}

	render() {
		const iconStar = <Icon name="md-star" size={16} color="#F5B642" />;
		const { details /* similarMovies */ } = this.props;
		const info = details;
		// const fiveSimilarMovies = _.take(similarMovies.results, 5);

		let height;
		if (this.state.tab === 0) height = this.state.infoTabHeight;
		if (this.state.tab === 1) height = this.state.castsTabHeight;
		if (this.state.tab === 2) height = this.state.similarToTabHeight;

		return (this.state.isLoading ? <View style={styles.progressBar}><ProgressBar /></View> :
			<ScrollView
				style={styles.container}
				onScroll={this._onScroll.bind(this)}
				onContentSizeChange={this._onContentSizeChange}
				refreshControl={
					<RefreshControl
						refreshing={this.state.isRefreshing}
						onRefresh={this._onRefresh}
						colors={['#EA0000']}
						progressBackgroundColor="white"
					/>
				}>
				<View style={{ height }}>
					<Swiper
						style={styles.swiper}
						autoplay
						autoplayTimeout={4}
						showsPagination={false}
						height={248}
						loop
						index={5}>
						{
							info.images.backdrops.map((item, index) => (
								<View key={index}>
									<Image source={{ uri: `${IMG_URL}/w780/${(item.file_path)}` }} style={styles.imageBackdrop} />
									<LinearGradient colors={['rgba(0, 0, 0, 0.2)', 'rgba(0,0,0, 0.2)', 'rgba(0,0,0, 0.7)']} style={styles.linearGradient} />
								</View>
							))
						}
					</Swiper>
					<View style={styles.cardContainer}>
						<Image source={{ uri: `${IMG_URL}/w185/${info.poster_path}` }} style={styles.cardImage} />
						<View style={styles.cardDetails}>
							<Text style={styles.cardTitle}>{info.original_title}</Text>
							<Text style={styles.cardTagline}>{info.tagline}</Text>
							<View style={styles.cardGenre}>
								{
									info.genres.map(item => (
										<Text key={item.id} style={styles.cardGenreItem}>{item.name}</Text>
									))
								}
							</View>
							<View style={styles.cardNumbers}>
								<View style={styles.cardStar}>
									{iconStar}
									<Text style={styles.cardStarRatings}>8.9</Text>
								</View>
								<Text style={styles.cardRunningHours} />
							</View>
						</View>
					</View>
					<View style={styles.contentContainer}>
						<ScrollableTabView
							onChangeTab={this._onChangeTab}
							renderTabBar={() => (
								<DefaultTabBar
									textStyle={styles.textStyle}
									underlineStyle={styles.underlineStyle}
									style={styles.tabBar}
								/>
							)}>
							<Info tabLabel="INFO" info={info} />
							<Casts tabLabel="CASTS" info={info} getTabHeight={this._getTabHeight} />
							{/* <Similar tabLabel="SIMILAR TO" similarMovies={fiveSimilarMovies} getTabHeight={this._getTabHeight} viewMovie={this._viewMovie} /> */}
						</ScrollableTabView>
					</View>
				</View>
			</ScrollView>
		);
	}
}

Movie.navigatorStyle = {
	navBarTransparent: true,
	navBarTextColor: 'white',
	navBarButtonColor: 'white'
};

Movie.propTypes = {
	actions: PropTypes.object.isRequired,
	details: PropTypes.object.isRequired,
	// similarMovies: PropTypes.object.isRequired,
	navigator: PropTypes.object,
	movieId: PropTypes.number.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		details: state.movies.details,
		similarMovies: state.movies.similarMovies
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(moviesActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);