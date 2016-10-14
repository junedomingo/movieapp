import { combineReducers } from 'redux';
import movies from '../modules/movies/movies.reducer';

const rootReducer = combineReducers({
	movies
});

export default rootReducer;
