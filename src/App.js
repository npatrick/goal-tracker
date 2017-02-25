import React, { Component } from 'react';
import Router from './Router';
import firebase from 'firebase';
import fireconfig from '../fireconfig';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(fireconfig);
  }

  render() {
    return (
      <Router />
    );
  }
}

export default App;
