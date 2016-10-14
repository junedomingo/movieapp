/* eslint-disable import/prefer-default-export */
import { Navigation } from 'react-native-navigation';

import SideMenu from './modules/_global/SideMenu';
import Movies from './modules/movies/Movies';

export function registerScreens(store, Provider) {
	Navigation.registerComponent('movieapp.Movies', () => Movies, store, Provider);
	Navigation.registerComponent('movieapp.SideMenu', () => SideMenu);
}
