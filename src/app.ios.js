/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';
import { iconsMap, iconsLoaded } from './utils/AppIcons';

registerScreens();

const navigatorStyle = {
	statusBarColor: '#831d19',
	navigationBarColor: '#339999',
	navBarBackgroundColor: '#339999',
	navBarTextColor: '#ffffff',
	navBarButtonColor: '#ffffff',
	statusBarTextColorScheme: 'light',
	navBarHidden: true,
	tabBarButtonColor: 'red',
	tabBarSelectedButtonColor: 'red',
	tabBarBackgroundColor: 'red'
};

class App extends Component {
	constructor(props) {
		super(props);
		iconsLoaded.then(() => {
			this.startApp();
		});
	}

	startApp() {
		Navigation.startTabBasedApp({
			tabs: [
				{
					label: 'One',
					screen: 'rn.FirstTabScreen',
					icon: iconsMap['ios-person'],
					selectedIcon: iconsMap['ios-person'],
					title: 'Hello World',
					navigatorStyle
				},
				{
					label: 'Two',
					screen: 'rn.SecondTabScreen',
					icon: iconsMap['ios-chatbubbles'],
					selectedIcon: iconsMap['ios-chatbubbles'],
					title: 'Test Title 2',
					navigatorStyle
				}
			],
			tabsStyle: {

			},
			drawer: { // optional, add this if you want a side menu drawer in your app
				left: { // optional, define if you want a drawer from the right
					screen: 'rn.FirstDrawerScreen' // unique ID registered with Navigation.registerScreen
				},
				right: { // optional, define if you want a drawer from the right
					screen: 'rn.SecondDrawerScreen' // unique ID registered with Navigation.registerScreen
				}
			},
			animationType: 'slide-down'
		});
	}
}

export default App;
