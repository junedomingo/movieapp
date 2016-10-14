import React, { PropTypes, Component } from 'react';
import {
	ActivityIndicator,
	StyleSheet,
	View,
	ListView
} from 'react-native';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as api from '../../../constants/api';
import * as moviesActions from '../movies.actions';
import MovieCard from './components/MovieCard';

class Upcoming extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
			currentPage: 1,
			upcomingMovies: {
				results: []
			}
		};
	}

	componentWillMount() {
		this.props.actions.retrieveUpcomingMovies(this.state.currentPage)
			.then(() => {
				const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 });
				const dataSource = ds.cloneWithRows(this.props.upcomingMovies.results);

				this.setState({
					isLoading: false,
					upcomingMovies: this.props.upcomingMovies,
					dataSource
				});
			});
	}

	retrieveNextPage() {
		if (this.state.currentPage !== this.props.upcomingMovies.total_page) {
			this.setState({
				currentPage: this.state.currentPage + 1
			});

			let page;
			if (this.state.currentPage === 1) {
				page = 2;
				this.setState({ currentPage: 2 });
			} else {
				page = this.state.currentPage + 1;
			}

			axios.get(`${api.URL}/movie/upcoming?api_key=${api.KEY}&page=${page}`)
				.then(res => {
					const data = this.state.upcomingMovies.results;
					const newData = res.data.results;

					newData.map((item, index) => data.push(item));

					this.setState({
						dataSource: this.state.dataSource.cloneWithRows(this.state.upcomingMovies.results)
					});
				}).catch(err => {
					console.log(err); // eslint-disable-line
				});
		}
	}

	render() {
		const progressBar = (
			<View style={styles.progressBar}>
				<ActivityIndicator size="large" color="#EA0000" />
			</View>
		);

		return (this.state.isLoading ? progressBar :
			<ListView
				style={styles.container}
				enableEmptySections
				onEndReached={() => this.retrieveNextPage()}
				onEndReachedThreshold={1200}
				dataSource={this.state.dataSource}
				renderRow={rowData => <MovieCard info={rowData} />}
			/>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f7f7f7',
		padding: 16
	},
	progressBar: {
		flex: 1,
		justifyContent: 'center'
	}
});

Upcoming.propTypes = {
	actions: PropTypes.object.isRequired,
	upcomingMovies: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		upcomingMovies: state.movies.upcomingMovies
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(moviesActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Upcoming);