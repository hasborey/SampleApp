import React from 'react'

import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native'

import ball from './src/assets/images/ball.jpg'
import run from './src/assets/images/run.jpg'
import football from './src/assets/images/football.jpg'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Text style={styles.title}>14</Text>
        <View style={styles.randomContainer}>
          <Text style={styles.randomNumber}>10</Text>
          <Text style={styles.randomNumber}>20</Text>
          <Text style={styles.randomNumber}>30</Text>
          <Text style={styles.randomNumber}>40</Text>
          <Text style={styles.randomNumber}>50</Text>
          <Text style={styles.randomNumber}>60</Text>
          <Text style={styles.randomNumber}>70</Text>
          <Text style={styles.randomNumber}>80</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
    padding: 10,
  },
  title: {
    fontSize: 50,
    margin: 10,
    paddingVertical: 20,
    paddingHorizontal: 50,
    backgroundColor: '#ddd',
  },
  randomContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'coral',
  },
  randomNumber: {
    fontSize: 25,
    paddingVertical: 20,
    paddingHorizontal: 50,
    marginHorizontal: 10,
    marginVertical: 20,
    backgroundColor: 'lightgray',
  },
})
