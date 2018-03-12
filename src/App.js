import React, { Component } from 'react';
import {
  ScrollView,
  View
} from 'react-native';
import RouterComponent from './Router';

//
export default class App extends Component {
  render() {
    
    return (
      <View style = {{ flex: 1}} >
        <RouterComponent />
      </View>
    );
  }
}

