import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { globalStyles, ratingsImages } from '../styles/global'
import Card from '../shared/Card'

export default function ReviewDetails(props) {
	const ratingNo = props.navigation.getParam('rating')

	return (
		<View style={globalStyles.container}>
		<Card>
			<Text style={globalStyles.titleText}>{props.navigation.getParam('title')}</Text>
				<Text style={globalStyles.bodyText}>{props.navigation.getParam('body')}</Text>
				{/* <Text style={globalStyles.titleText}>{props.navigation.getParam('rating')}</Text> */}
				<View style={styles.rating}>
					{/* <Text>Game zone rating:</Text> */}
					<Image source={ratingsImages.ratings[ratingNo]}/>
				</View>
			</Card>
		</View>
	)
}

const styles = StyleSheet.create({
	rating: {
		marginTop: 10,
		paddingTop: 10,
		alignItems: 'center',
		justifyContent: 'center',
		borderTopWidth: 0.5,
		borderTopColor: '#1a1a1a'
	}
})