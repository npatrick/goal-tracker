import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Task from './components/Task';
import { Input, Button } from './components/common';
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
  const task = {
    title: this.state.taskToAdd,
    completed: false
  };
  console.log('call of addtask', tasks);
  tasks.push(task);
  this.setState({
    tasks,
    taskToAdd: ''
  });
}

taskTextChange(taskToAdd) {
  this.setState({ taskToAdd });
}

renderTasks() {
  return this.state.tasks.map(
      (task, index) => (<Task key={index} text={task.title} status={task.completed} />)
    ); 
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
        <Button onPress={this.addTask.bind(this)}>
          Add
        </Button>

      </View>
        );
    }
}

export default App;
