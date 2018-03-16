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
        <ImageBackground style={styles.pic} source={ball}>
          <Text style={styles.label}>Foot ball</Text>
        </ImageBackground>
        <Image style={styles.pic} source={run}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'aquamarine'
  },
  pic: {
    flex: 1,
    width: Dimensions.get('window').width,
    resizeMode: 'contain',
    backgroundColor: 'antiquewhite',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  label: {
    // flex: 1,
    flexDirection: 'row',
    fontSize: 20,
    color: 'white',
    padding: 10,
    alignSelf: 'stretch',
    textAlign: 'right',
    backgroundColor: 'rgba(0,0,0,0.5)',
  }
})
