// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/screens/Home';
import BuyCrypto from './components/screens/BuyCrypto';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false, }} />
        <Stack.Screen name="Buy Crypto" component={BuyCrypto} options={{ headerShown: false, }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;