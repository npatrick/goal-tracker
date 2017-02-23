import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Task extends Component {
    componentDidMount() {
        console.log('RENDERING TASK', this.props.text);
    }
    render() {
        return (<View>
            <Text> {this.props.text} </Text>
        </View>);
    }
}

export default Task;
