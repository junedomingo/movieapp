/* eslint-disable new-cap */
import { PixelRatio, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

let navIconSize;
// eslint-disable-next-line no-undef
if (!__DEV__ && Platform.OS === 'android') {
  navIconSize = PixelRatio.getPixelSizeForLayoutSize(40);
} else {
  navIconSize = 40;
}

const replaceSuffixPattern = /--(active|big|small|very-big)/g;
const icons = {
  'ios-film-outline': [30],
  'ios-film': [30],
  'ios-desktop-outline': [30],
  'ios-desktop': [30],
  'ios-search': [30],
  'ios-arrow-round-down': [navIconSize],
  'ios-close': [40],
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
      )
    )
  ).then(sources => {
    Object.keys(icons).forEach(
      // eslint-disable-next-line no-return-assign
      (iconName, idx) => (iconsMap[iconName] = sources[idx])
    );

    // Call resolve (and we are done)
    resolve(true);
  });
});

export { iconsMap, iconsLoaded };
