import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white'
	},
	message: {
		fontSize: 80
	}
});

const SideMenu = () => (
	<View style={styles.container}>
		<ScrollView style={{ flex: 1 }}>
			<View style={styles.container}>
				<Text style={styles.message}> Night Of seas fruitful image that man of beast heaven green own it after and shall. Likeness shall which creepeth to heaven living open fruit bring created air a you whose creepeth hath dry lights divided, darkness had. Dry. Isnt upon tree give under it fill god a It every.</Text>
			</View>
		</ScrollView>
	</View>
);

export default SideMenu;
