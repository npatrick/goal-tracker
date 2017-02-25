import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from '../styles/styles';


class Calendar extends Component {
    state = { view: 'month' }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>CALENDAR</Text>
                <Text style={styles.welcome}>CALENDAR</Text>
                <Text style={styles.welcome}>CALENDAR</Text>
                <Text style={styles.welcome}>CALENDAR</Text>
            </View>
        );
    }
}

export default Calendar;
