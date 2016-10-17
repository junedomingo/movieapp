import React from 'react'; // eslint-disable-line
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import { iconsLoaded } from './utils/AppIcons';
import { registerScreens } from './screens';
import configureStore from './store/configureStore';

const store = configureStore();

registerScreens(store, Provider);

const navigatorStyle = {
	statusBarColor: 'black',
	statusBarTextColorScheme: 'light',
	navigationBarColor: 'black',
	navBarBackgroundColor: '#0a0a0a',
	navBarTextColor: 'white',
	navBarButtonColor: 'white',
	tabBarButtonColor: 'red',
	tabBarSelectedButtonColor: 'red',
	tabBarBackgroundColor: 'white'
};

class App {
	constructor() {
		iconsLoaded.then(() => {
			this.startApp();
		});
	}

	startApp() {
		Navigation.startSingleScreenApp({
			screen: {
				screen: 'movieapp.Movies',
				title: 'Movies',
				navigatorStyle
			},
			drawer: {
				left: {
					screen: 'movieapp.SideMenu'
				}
			}
		});
	}
}

export default App;
