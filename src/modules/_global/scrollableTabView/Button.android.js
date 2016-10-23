import React, { PropTypes } from 'react';
import {
	TouchableNativeFeedback
} from 'react-native';


const Button = props => (
	<TouchableNativeFeedback
		delayPressIn={0}
		background={TouchableNativeFeedback.SelectableBackground()} // eslint-disable-line new-cap
		{...props}>

		{props.children}
	</TouchableNativeFeedback>
);

Button.propTypes = {
	children: PropTypes.object
};

module.exports = Button;