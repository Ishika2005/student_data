import React, { createContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstPage from './src/FirstPage';
import SecondPage from './src/SecondPage';
import ThirdPage from './src/ThirdPage';
import Offline from 'react-native-offline';

const Stack = createNativeStackNavigator();



function App() {
  

  return (
    <Offline>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="FirstPage" component={FirstPage} />
          <Stack.Screen name="SecondPage" component={SecondPage} />
          <Stack.Screen name="ThirdPage" component={ThirdPage} />
        </Stack.Navigator>
      </NavigationContainer>
      </Offline>
    
  );
}

export default App;
