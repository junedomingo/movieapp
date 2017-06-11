# movieapp
Discover Movies and TV shows

![movieapp-screenshots_big_iphone_](https://cloud.githubusercontent.com/assets/5106887/20606597/f176b3e2-b2ac-11e6-9163-c9e625df7748.png)

### Download APK file
 - [Download from Google Drive - v2.2.1](http://bit.ly/2s9UdxG)

### What's included
| Name             | Description   |
| :-------------:|--------------|
| [React Native](http://facebook.github.io/react-native/releases/0.32/) |  Build Native Mobile Apps using JavaScript and React. |
| [React Native Navigation](https://github.com/wix/react-native-navigation) | App-wide support for 100% native navigation with an easy cross-platform interface. |
| [Redux](https://nodejs.org/) | Predictable state container for JavaScript apps.  |
| [Redux Thunk](https://github.com/gaearon/redux-thunk) | Thunk middleware for Redux | 
| [ESLint](http://eslint.org/) | The pluggable linting utility for JavaScript and JSX |

### Requirements
- [Node](https://nodejs.org/) >= 5.0.0
- [npm](https://npmjs.com) >= 3

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
