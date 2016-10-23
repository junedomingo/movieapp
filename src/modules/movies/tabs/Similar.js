import React, { PropTypes } from 'react';
import {
	StyleSheet,
	Text,
	View
} from 'react-native';

import CardMovie from '../components/CardMovie';
import styles from './styles/Similar';

const Similar = ({ similarMovies, getTabHeight, viewMovie }) => {
	let computedHeight = (163 + 10) * similarMovies.length; // (cardImage.height + View.marginBottom)
	computedHeight += 447 + 40; // Header height + container ((20 paddingVertical) = 40)
	return (!similarMovies.length ?
		<View style={styles.noContentContainer}>
			<Text style={styles.noContentText} onLayout={getTabHeight.bind(this, 'similarTo', 600)}>
				No Similar Movies Provided
			</Text>
		</View> :

			<View style={styles.container} onLayout={getTabHeight.bind(this, 'similarTo', computedHeight)}>
				{
					similarMovies.map(item =>
						<View key={item.id} style={{ marginBottom: 10 }}>
							<CardMovie info={item} viewMovie={viewMovie} />
						</View>
					)
				}
			</View>
	);
};

Similar.propTypes = {
	similarMovies: PropTypes.array.isRequired,
	getTabHeight: PropTypes.func.isRequired
};

export default Similar;