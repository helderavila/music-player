import React from 'react';
import { StatusBar } from 'react-native'

// Libs
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Pages
import PlayingNow from './pages/PlayingNow'

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor="#fff" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false }} name="PlayingNow" component={PlayingNow} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default Routes;