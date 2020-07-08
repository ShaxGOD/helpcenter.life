import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppTabs from './app/AppTabs.js'


export default class App extends React.Component {

  render() {
    return (
      <NavigationContainer>
        <AppTabs />
      </NavigationContainer>
    )
  }
}
