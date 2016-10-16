import * as types from '../../constants/actionTypes';
import * as api from '../../constants/api';
import axios from 'axios';

// GENRES
export function retrieveMoviesGenresSuccess(res) {
	return {
		type: types.RETRIEVE_MOVIES_GENRES_SUCCESS,
		moviesGenres: res.data
	};
}

export function retrieveMoviesGenres() {
	return function (dispatch) {
		return axios.get(`${api.URL}/genre/movie/list?api_key=${api.KEY}`)
		.then(res => {
			dispatch(retrieveMoviesGenresSuccess(res));
		})
		.catch(error => {
			console.log(error); //eslint-disable-line
		});
	};
}

// POPULAR
export function retrievePopularMoviesSuccess(res) {
	return {
		type: types.RETRIEVE_POPULAR_MOVIES_SUCCESS,
		popularMovies: res.data
	};
}

export function retrievePopularMovies(page) {
	return function (dispatch) {
		return axios.get(`${api.URL}/movie/popular?api_key=${api.KEY}&page=${page}`)
		.then(res => {
			dispatch(retrievePopularMoviesSuccess(res));
		})
		.catch(error => {
			console.log('Popular', error); //eslint-disable-line
		});
	};
}

// TOP RATED
export function retrieveTopRatedMoviesSuccess(res) {
	return {
		type: types.RETRIEVE_TOPRATED_MOVIES_SUCCESS,
		topRatedMovies: res.data
	};
}

export function retrieveTopRatedMovies(page) {
	return function (dispatch) {
		return axios.get(`${api.URL}/movie/top_rated?api_key=${api.KEY}&page=${page}`)
		.then(res => {
			dispatch(retrieveTopRatedMoviesSuccess(res));
		})
		.catch(error => {
			console.log('Top Rated', error); //eslint-disable-line
		});
	};
}

// UPCOMING
export function retrieveUpcomingMoviesSuccess(res) {
	return {
		type: types.RETRIEVE_UPCOMING_MOVIES_SUCCESS,
		upcomingMovies: res.data
	};
}

export function retrieveUpcomingMovies(page) {
	return function (dispatch) {
		return axios.get(`${api.URL}/movie/upcoming?api_key=${api.KEY}&page=${page}`)
		.then(res => {
			dispatch(retrieveUpcomingMoviesSuccess(res));
		})
		.catch(error => {
			console.log('Upcoming', error); //eslint-disable-line
		});
	};
}

// NOW PLAYING
export function retrieveNowPlayingMoviesSuccess(res) {
	return {
		type: types.RETRIEVE_NOWPLAYING_MOVIES_SUCCESS,
		nowPlayingMovies: res.data
	};
}

export function retrieveNowPlayingMovies(page) {
	return function (dispatch) {
		return axios.get(`${api.URL}/movie/now_playing?api_key=${api.KEY}&page=${page}`)
		.then(res => {
			dispatch(retrieveNowPlayingMoviesSuccess(res));
		})
		.catch(error => {
			console.log('Now Playing', error); //eslint-disable-line
		});
	};
}
