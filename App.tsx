/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';
import ClientsList from './src/Components/Screens/ClientsList';
import Header from './src/Components/Layout/Header/Header';
import MainStack from './src/Components/Navigations/MainStack';
import Home from './src/Components/Screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


const App = () => {
  return (
      <NavigationContainer>
        <Header />
        <MainStack />
      </NavigationContainer>
  );
};

export default App;
