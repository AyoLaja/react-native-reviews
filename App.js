import React, { useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import Home from './screens/Home'
// import Navigator from './routes/homeStack'
import Navigator from './routes/drawer'

const getFonts = () => {
	return Font.loadAsync({
		'robotomono-regular': require('./assets/fonts/RobotoMono-Regular.ttf'),
		'robotomono-bold': require('./assets/fonts/RobotoMono-Bold.ttf')
	})
}

export default function App() {
	const [fontsLoaded, setFontsLoaded] = useState(false)

	if (fontsLoaded) {
		return (
			<Navigator/>
		);
	}
	else {
		return (
			<AppLoading
				startAsync={getFonts}
				onFinish={() => setFontsLoaded(true)}
			/>
		)
	}
}
	