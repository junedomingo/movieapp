import React, { PropTypes, Component } from 'react';
import {
	View,
	ListView
} from 'react-native';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as api from '../../constants/api';
import * as moviesActions from './movies.actions';

import styles from './styles/MoviesList';
import CardMovie from './components/CardMovie';
import ProgressBar from '../_global/ProgressBar';

class Popular extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
			currentPage: 1,
			list: {
				results: []
			}
		};
	}

	componentWillMount() {
		this.props.actions.retrieveMoviesList(this.props.type, this.state.currentPage)
		.then(() => {
			const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 });
			const dataSource = ds.cloneWithRows(this.props.list.results);
			this.setState({
				list: this.props.list,
				dataSource,
				isLoading: false
			});
		});
	}

	retrieveNextPage(type) {
		if (this.state.currentPage !== this.props.list.total_page) {
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

			axios.get(`${api.URL}/movie/${type}?api_key=${api.KEY}&page=${page}`)
				.then(res => {
					const data = this.state.list.results;
					const newData = res.data.results;

					newData.map((item, index) => data.push(item));

					this.setState({
						dataSource: this.state.dataSource.cloneWithRows(this.state.list.results)
					});
				}).catch(err => {
					console.log('next page', err); // eslint-disable-line
				});
		}
	}

	render() {
		return (this.state.isLoading ? <View style={styles.progressBar}><ProgressBar /></View> :
			<ListView
				style={styles.container}
				enableEmptySections
				onEndReached={type => this.retrieveNextPage(this.props.type)}
				onEndReachedThreshold={1200}
				dataSource={this.state.dataSource}
				renderRow={rowData => <CardMovie info={rowData} />}
				renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.seperator} />}
				renderFooter={() => <View style={{ height: 50 }}><ProgressBar /></View>}
			/>
		);
	}
}

Popular.propTypes = {
	actions: PropTypes.object.isRequired,
	list: PropTypes.object.isRequired,
	type: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		list: state.movies.list
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(moviesActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Popular);
