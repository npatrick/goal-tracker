import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Task from './components/Task';
import { AlertModal, Input, Button } from './components/common';
import styles from './styles/styles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      taskToAdd: null,
      tasks: [],
      alertModalVisible: false
     };
  }

addTask() {
  console.log(this.props);
  if (this.state.taskToAdd) {
    const tasks = this.state.tasks.slice();
    const task = {
      title: this.state.taskToAdd,
      completed: false
    };
    tasks.push(task);
    this.setState({
      tasks,
      taskToAdd: null
    });
  } else {
    this.setState({ alertModalVisible: true });
  }
}

removeTask(index) {
  const tasks = this.state.tasks;
  tasks.splice(index, 1);
  this.setState({
    tasks
  });
}

closeModal() {
    this.setState({ alertModalVisible: false });
}

taskTextChange(taskToAdd) {
  this.setState({ taskToAdd });
}

renderTasks() {
  return this.state.tasks.map(
      (task, index) => 
        (<Task 
          removeTask={this.removeTask.bind(this)} 
          key={index} 
          text={task.title} 
          status={task.completed} 
          index={index}
        />)
    ); 
}

    render() {
        return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to GoalTracker!!!
        </Text>
        <ScrollView style={{ width: 200, height: 300, backgroundColor: '#17BEBB' }}>
          {this.renderTasks()}
        </ScrollView>
        
        <View style={{ width: 200, height: 120, backgroundColor: '#17BEBB' }}>
          <Input 
            placeholder='Add a Task!' 
            onChangeText={this.taskTextChange.bind(this)} 
            value={this.state.taskToAdd} 
          />
          <Button onPress={this.addTask.bind(this)}>
            Add
          </Button>
        </View>
        <AlertModal 
          visible={this.state.alertModalVisible} 
          modalText='Please add a task name!'
          closeModal={this.closeModal.bind(this)}
          closeText='OK'
        />

      </View>
        );
    }
}

export default App;
