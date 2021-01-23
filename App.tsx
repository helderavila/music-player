import React from 'react';

// Expo
import { useFonts, Poppins_400Regular, Poppins_500Medium } from '@expo-google-fonts/poppins';

import AppLoading from 'expo-app-loading';

// Routes
import Routes from './src/routes'

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium
  });


  if (!fontsLoaded) return <AppLoading />;

  return <Routes />
}