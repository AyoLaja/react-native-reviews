import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Header(props) {
  const openMenu = () => {
    props.navigation.openDrawer()
  }

  return (
    <View style={styles.header}>
      <Ionicons name="ios-menu" size={30} style={styles.icon} onPress={openMenu}/>
      <View style={styles.headerTitle}>
        <Image source={require('../assets/heart_logo.png')} style={styles.headerImage}/>
        <Text style={styles.headerText}>{props.title}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: 1,
    color: '#fff'
  },
  icon: {
    position: 'absolute',
    left: -50,
    color: '#fff'
  },
  headerImage: {
    width: 26,
    height: 26,
    marginRight: 10
  },
  headerTitle: {
    flexDirection: 'row'
  }
})