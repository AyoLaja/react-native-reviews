import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/global'
import Card from '../shared/Card'

export default function ReviewDetails(props) {
	return (
		<View style={globalStyles.container}>
		<Card>
			<Text style={globalStyles.titleText}>{props.navigation.getParam('title')}</Text>
				<Text style={globalStyles.titleText}>{props.navigation.getParam('body')}</Text>
				<Text style={globalStyles.titleText}>{props.navigation.getParam('rating')}</Text>
			</Card>
		</View>
	)
}