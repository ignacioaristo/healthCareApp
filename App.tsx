import React from 'react';
import Header from './src/Components/Layout/Header/Header';
import MainStack from './src/Components/Navigations/MainStack';
import { NavigationContainer } from '@react-navigation/native';
import RNBootSplash from "react-native-bootsplash";

// onReady={() => RNBootSplash.hide()}

const App = () => {
  return (
      <NavigationContainer onReady={() => RNBootSplash.hide()}>
        <Header />
        <MainStack />
      </NavigationContainer>
  );
};

export default App;
