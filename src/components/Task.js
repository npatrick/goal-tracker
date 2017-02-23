import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         status: this.props.status   
        };
    }
    componentDidMount() {
        console.log('RENDERING TASK', this.props.text);
        console.log('STATE', this.state);
    }
    completeTask() {
        this.setState({
            status: !this.state.status
        });
        console.log('STATE FROM COMPLETETASK CALL', this.state);
    }
    completeOrNah() {
        if (this.state.status) {
            return 'COMPLETE';
        } 
            return 'INCOMPLETE';
    }
    buttonTextConditional() {
        if (this.state.status) {
            return 'incomplete';
        } 
            return 'complete';
    }
    render() {
        return (<View>
            <Text> {this.props.text} </Text>
            <Text> COMPLETED: {this.completeOrNah()} </Text>
            <TouchableHighlight onPress={this.completeTask.bind(this)}>
                <Text> Tap to {this.buttonTextConditional()} </Text>
            </TouchableHighlight>
        </View>);
    }
}

export default Task;
