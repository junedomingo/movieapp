# movieapp
Discover Movies and TV shows


![movieapp-screenshots_big_iphone_](https://cloud.githubusercontent.com/assets/5106887/20606597/f176b3e2-b2ac-11e6-9163-c9e625df7748.png)




### Download APK file
 - [Download from Google Drive](http://bit.ly/2gjWs9P)

### What's included

- [React Native](https://facebook.github.io/react-native/) - Build Native Mobile Apps using JavaScript and React
- [Redux](https://nodejs.org/) - Predictable state container for JavaScript apps
- [Wix/react-native-navigation](https://github.com/wix/react-native-navigation) - A complete native navigation solution for React Native with optional redux support - nav bars, tabs, drawer, modals
- [Redux Thunk](https://github.com/gaearon/redux-thunk) - Thunk middleware for Redux
- [ESLint](http://eslint.org/) - The pluggable linting utility for JavaScript and JSX

### Requirements
- [Node](https://nodejs.org) `4.x` or newer
- [React Native](http://facebook.github.io/react-native/docs/getting-started.html) for development
- [Android Studio](https://developer.android.com/studio/index.html) for Android development
- [Xcode](https://developer.apple.com/xcode/) for iOS development
- [Android SDK](https://developer.android.com/sdk/) `23.0.1` or newer for Android development
- [Genymotion](https://www.genymotion.com/) for Android emulation
- [YARN](https://yarnpkg.com/) - for dependency management


### Installation

Clone this repo

```sh
$ git clone git@github.com:JuneDomingo/movieapp.git
$ cd movieapp
$ yarn install or npm install
```

Create `.env` file in your root directory and add the following

```sh
TMDB_URL=https://api.themoviedb.org/3
TMDB_IMG_URL=https://image.tmdb.org/t/p
TMDB_API_KEY=your_tmdb_api_key_here

YOUTUBE_URL=https://www.googleapis.com/youtube/v3/videos
YOUTUBE_API_KEY=your_youtube_api_key_here

```
Get api key -
[TMDB](https://www.themoviedb.org/) -
[Youtube](https://console.developers.google.com)

### How to start
```sh
$ react-native run-android
$ react-native run-ios
```


### Exponent/ex-navigation version
Brent Vatne did awesome work to make this run on exponent, checkout his [repo](https://github.com/brentvatne/movieapp)
- [Open this app in exponent](https://getexponent.com/@community/movieapp)



### How to rename react native app?
[react-native-rename](https://github.com/JuneDomingo/react-native-rename) - Rename react-native app with just one command
