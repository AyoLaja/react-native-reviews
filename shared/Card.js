import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Card(props) {
  console.log(props)
  return (
    <View style={styles.card}> 
      <View style={styles.cardContent}> 
        {props.children}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    backgroundColor: '#333',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowColor: '#555',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginBottom: 10
  },
  cardContent: {
    padding: 20,
  }
})