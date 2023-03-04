// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Router from './src/routers';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
  );
}

export default App;