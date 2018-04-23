import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBFIFTGbwBCVMxpd74vgJnZ38OwRQDkPAU',
      authDomain: 'authentication-816ab.firebaseapp.com',
      databaseURL: 'https://authentication-816ab.firebaseio.com',
      projectId: 'authentication-816ab',
      storageBucket: 'authentication-816ab.appspot.com',
      messagingSenderId: '252879785234',
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
