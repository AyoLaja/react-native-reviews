import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
// import { createAppContainer } from 'react-navigation'
import Home from '../screens/Home'
import ReviewDetails from '../screens/ReviewDetails'
import Header from '../shared/Header'

const screens = {
  Home: {
    screen: Home,
    navigationOptions: (props) => {
      //Changed from title to headerTitle because titile only accepts strings
      return {
        headerTitle: () => <Header navigation={props.navigation} title="Gamezone Home"/>
      }
    }
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: 'Review Details'
    }
  }
}

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#000',
      borderColor: '#000',
      height: 100
    },
    headerTintColor: '#fff'
  }
})

export default HomeStack