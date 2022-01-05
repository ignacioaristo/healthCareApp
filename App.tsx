import React from 'react';
import Header from './src/Components/Layout/Header/Header';
import MainStack from './src/Components/Navigations/MainStack';
import { NavigationContainer } from '@react-navigation/native';


const App = () => {
  return (
      <NavigationContainer>
        <Header />
        <MainStack />
      </NavigationContainer>
  );
};

export default App;
