import React, { PropTypes } from 'react';
import {
	TouchableOpacity
} from 'react-native';

const Button = props => (
	<TouchableOpacity {...props}>
		{props.children}
	</TouchableOpacity>
);

Button.propTypes = {
	children: PropTypes.object
};

module.exports = Button;