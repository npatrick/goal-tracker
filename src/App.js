import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './styles/styles';

class App extends Component {

    render() {
        return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to GoalTracker!!!
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
        );
    }
}

export default App;
