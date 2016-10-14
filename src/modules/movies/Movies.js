import React, { PropTypes, Component } from 'react';
import { StyleSheet } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as moviesActions from './movies.actions';

import DefaultTabBar from '../_global/scrollableTabView/DefaultTabBar';
import NowPlaying from './tabs/NowPlaying';
import Popular from './tabs/Popular';
import TopRated from './tabs/TopRated';
import Upcoming from './tabs/Upcoming';

class Movies extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.actions.retrieveMoviesGenres();
	}

	render() {
		return (
			<ScrollableTabView
				renderTabBar={() => (
					<DefaultTabBar
						textStyle={styles.textStyle}
						underlineStyle={styles.underlineStyle}
						style={styles.tabBar}
					/>
				)}>
				<Popular tabLabel="POPULAR" />
				<TopRated tabLabel="TOP RATED" />
				<Upcoming tabLabel="UPCOMING" />
				<NowPlaying tabLabel="NOW PLAYING" />
			</ScrollableTabView>
		);
	}
}

const styles = StyleSheet.create({
	textStyle: {
		color: 'white',
		paddingTop: 10,
		fontSize: 11,
		fontWeight: 'bold'
	},
	underlineStyle: {
		backgroundColor: '#EA0000'
	},
	tabBar: {
		backgroundColor: '#2B2B2B'
	}
});

Movies.propTypes = {
	actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(moviesActions, dispatch)
	};
}

export default connect(null, mapDispatchToProps)(Movies);
