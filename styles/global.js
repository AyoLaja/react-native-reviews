import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
	container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1a1a1a'
	},
	titleText: {
		fontFamily: 'robotomono-bold',
    fontSize: 18,
    color: '#fff',
    marginBottom: 5
  },
  bodyText: {
		fontFamily: 'robotomono-regular',
    fontSize: 13,
    color: '#fff'
  },
  paragraph: {
    lineHeight: 1.5,
    marginVertical: 0
  }
})

export const ratingsImages = {
  ratings: {
    '1': require('../assets/rating-1.png'),
    '2': require('../assets/rating-2.png'),
    '3': require('../assets/rating-3.png'),
    '4': require('../assets/rating-4.png'),
    '5': require('../assets/rating-5.png'),
  }
}