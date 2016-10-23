/* eslint-disable new-cap */
import Ionicons from 'react-native-vector-icons/Ionicons';

const replaceSuffixPattern = /--(active|big|small|very-big)/g;
const icons = {
	'ios-person': [30, '#000000'],
	'ios-person--big': [50, '#bbb'],

	'ios-person--active': [30, '#fff'],
	'ios-person--active--big': [50, '#fff'],
	'ios-person--active--very-big': [100, '#fff'],

	'ios-people': [30, '#7CBB00'],
	'ios-people--active': [30, '#FF6D27'],

	'ios-keypad': [30, '#bbb'],
	'ios-keypad--active': [30, '#fff'],

	'ios-chatbubbles': [30, '#bbb'],
	'ios-chatbubbles--active': [30, '#fff']
};

const iconsMap = {};
const iconsLoaded = new Promise((resolve, reject) => {
	new Promise.all(
		Object.keys(icons).map(iconName =>
		// IconName--suffix--other-suffix is just the mapping name in iconsMap
		Ionicons.getImageSource(
		iconName.replace(replaceSuffixPattern, ''),
		icons[iconName][0],
		icons[iconName][1]
		))
	).then(sources => {
		Object.keys(icons)
		.forEach((iconName, idx) => (iconsMap[iconName] = sources[idx]));

		// Call resolve (and we are done)
		resolve(true);
	});
});

export {
	iconsMap,
	iconsLoaded
};
