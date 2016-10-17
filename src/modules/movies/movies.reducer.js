import * as types from '../../constants/actionTypes';
import initialState from '../../reducers/initialState';

export default function (state = initialState.movies, action) {
	switch (action.type) {

		case types.RETRIEVE_POPULAR_MOVIES_SUCCESS:
			return {
				...state,
				popularMovies: action.popularMovies
			};

		case types.RETRIEVE_TOPRATED_MOVIES_SUCCESS:
			return {
				...state,
				topRatedMovies: action.topRatedMovies
			};

		case types.RETRIEVE_UPCOMING_MOVIES_SUCCESS:
			return {
				...state,
				upcomingMovies: action.upcomingMovies
			};

		case types.RETRIEVE_NOWPLAYING_MOVIES_SUCCESS:
			return {
				...state,
				nowPlayingMovies: action.nowPlayingMovies
			};

		case types.RETRIEVE_MOVIES_GENRES_SUCCESS:
			return {
				...state,
				genres: action.moviesGenres
			};

		case types.RETRIEVE_MOVIES_LIST_SUCCESS:
			return {
				...state,
				list: action.list
			};
		default:
			return state;
	}
}
