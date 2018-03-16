import React from 'react'

import { View, Text, StatusBar, StyleSheet } from 'react-native'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Text style={styles.defaultText}>Sierra</Text>
        <Text style={[styles.defaultText, styles.selectedText]}>Tanner</Text>
        <Text style={styles.defaultText}>Travis</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'aquamarine'
  },
  defaultText: {
    flex: 1,
    fontSize: 30,
    textAlign: 'center',
    padding: 10,
    margin: 5,
    borderWidth: StyleSheet.hairlineWidth,
    color: 'purple',
  },
  selectedText: {
    // flex: 2,
    // alignSelf: 'flex-end',
    backgroundColor: 'yellow',
    color: 'blue',
    fontWeight: 'bold',
  }
})
