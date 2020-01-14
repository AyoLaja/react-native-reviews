import React, { useState } from 'react';
import { 
	StyleSheet, 
	Text, 
	View, 
	FlatList, 
	Modal,
	TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global'
import Card from '../shared/Card'
import { Ionicons } from '@expo/vector-icons';

export default function Home(props) {
	const [modalOpen, setModalOpen] = useState(false)
	const [reviews, setReviews] = useState([
    { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
	]);
	
	const onPressHandler = (item) => {
		props.navigation.navigate('ReviewDetails', item)
	}

	return (
		<View style={globalStyles.container}>
			<Modal visible={modalOpen} animationType='slide' presentationStyle="pageSheet">
				<View style={styles.modalContent}>
					<Ionicons 
						name='ios-close-circle'
						size={35}
						onPress={() => setModalOpen(false)}
						style={{ color: '#fff' }}
					/>
					<Text>Modal</Text>
				</View>
			</Modal>
			<Ionicons 
				name='ios-add-circle'
				size={50}
				onPress={() => setModalOpen(true)}
				style={styles.modalToggle}
			/>
			<FlatList
				data={reviews}
				renderItem={({ item }) => (
					<TouchableOpacity onPress={() => props.navigation.navigate('ReviewDetails', item)}>
						<Card>
							<Text style={globalStyles.titleText}>{item.title}</Text> 
						</Card>
					</TouchableOpacity>
				)}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	modalContent: {
		flex: 1,
		padding: 20,
		backgroundColor: '#000'
	},
	modalToggle: {
		marginBottom: 10,
		color: '#fff',
		alignSelf: 'center'
	}
})