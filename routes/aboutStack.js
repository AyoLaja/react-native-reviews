import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import About from '../screens/About'
import Header from '../shared/Header'

const screens = {
  About: {
    screen: About,
    navigationOptions: (props) => {
      //Changed from title to headerTitle because titile only accepts strings
      return {
        headerTitle: () => <Header navigation={props.navigation} title="About Gamezone"/>
      }
    }
  }
}

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#000',
      borderColor: '#000',
      height: 100
    },
    headerTintColor: '#fff'
  }
})

export default AboutStack