import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './stacknavigation/stacknavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Catalogue2 from './FlatList/Catalogue2';
import Panier from './FlatList/Panier';

const Stack = createNativeStackNavigator();

export default function MyApp() {
  return (
    <NavigationContainer> 
        <Stack.Navigator>
        <Stack.Screen name="Produits" component={Catalogue2} />
        <Stack.Screen name="Panier" component={Panier} options={{ title: 'Mon Panier' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
