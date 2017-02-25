import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Calendar from './components/Calendar';
import TasksHome from './components/TasksHome';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 55 }}>
        <Scene key='main'>
            <Scene key="tasks" component={TasksHome} title="Tasks" />
            <Scene key="calendar" component={Calendar} title="Calendar" />
        </Scene>

    </Router>
  );
};

export default RouterComponent;
