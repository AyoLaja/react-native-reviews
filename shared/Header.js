import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Header(props) {
  const openMenu = () => {
    props.navigation.openDrawer()
  }

  return (
    <View style={styles.header}>
    <Ionicons name="ios-menu" size={30} style={styles.icon} onPress={openMenu}/>
      <View>
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
  }
})