import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import Task from './components/Task';
import { Input } from './components/common';
import styles from './styles/styles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      taskToAdd: '',
      tasks: []
     };
  }

addTask() {
  const tasks = this.state.tasks.slice();
  console.log('call of addtask', tasks);
  tasks.push(this.state.taskToAdd);
  this.setState({
    tasks,
    taskToAdd: ''
  });
}

taskTextChange(taskToAdd) {
  this.setState({ taskToAdd });
}

renderTasks() {
  return this.state.tasks.map((task, index) => (<Task key={index} text={task} />)); 
}

    render() {
        return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to GoalTracker!!!
        </Text>
        {this.renderTasks()}
        <Input 
          placeholder='Add a Task!' 
          onChangeText={this.taskTextChange.bind(this)} 
          value={this.state.taskToAdd} 
        />
        <TouchableHighlight onPress={this.addTask.bind(this)}>
          <Text> Add </Text>
        </TouchableHighlight>

      </View>
        );
    }
}

export default App;
