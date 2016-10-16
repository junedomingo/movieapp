/* eslint-disable react/no-did-update-set-state */
import React, {
	PropTypes,
	Component
} from 'react';
import {
	StyleSheet,
	ScrollView,
	View,
	Text
} from 'react-native';
import Swiper from 'react-native-swiper';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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

	render() {
		const { nowPlayingMovies, popularMovies } = this.props;

		return (this.state.isLoading ? <View style={styles.progressBar}><ProgressBar /></View> :
			<ScrollView style={styles.container}>
				<Swiper
					autoplay
					autoplayTimeout={5}
					showsPagination={false}
					height={248}>
					{nowPlayingMovies.results.map(info => (
						<CardSwipe key={info.id} info={info} />
					))}
				</Swiper>

				<View>
					<View style={styles.listHeading}>
						<Text style={styles.listHeadingLeft}>Popular</Text>
						<Text style={styles.listHeadingRight}>See all</Text>
					</View>
					<ScrollView horizontal showsHorizontalScrollIndicator={false}>
						{popularMovies.results.map(info => (
							<CardThumb key={info.id} info={info} />
						))}
					</ScrollView>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'black'
	},
	progressBar: {
		backgroundColor: 'black',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	listHeading: {
		paddingHorizontal: 16,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 15,
		marginTop: 30
	},
	listHeadingLeft: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 18
	},
	listHeadingRight: {
		color: 'white',
		fontSize: 16
	}
});

Movies.propTypes = {
	actions: PropTypes.object.isRequired,
	nowPlayingMovies: PropTypes.object.isRequired,
	popularMovies: PropTypes.object.isRequired
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
