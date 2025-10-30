import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './stacknavigation/stacknavigator';




export default function MyApp() {
  return (
    <NavigationContainer> 
        <StackNavigator/>
    </NavigationContainer>
  );
}
