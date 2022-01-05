import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import ClientsList from '../Screens/ClientsList';
import LogIn from '../Screens/LogIn';
const Stack = createNativeStackNavigator();
import AsyncStorage from '@react-native-async-storage/async-storage';

const MainStack = () => {
  const [dataStorage, setDataStorage] = useState('');

  // useEffect(() => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('user')
        setDataStorage(jsonValue != null ? JSON.parse(jsonValue) : null);
      } catch(error) {
        return error;
      }
    }
    getData();
  // })

  return(
    <Stack.Navigator>
      <Stack.Screen
        name="Log In"
        component={LogIn}
        options={{title: dataStorage ? dataStorage.username : 'Log in'}} />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: dataStorage ? dataStorage.username : 'Home'}} />
      <Stack.Screen
        name= 'Clients'
        component= {ClientsList}
        options={{title: dataStorage ? dataStorage.username : 'Client List'}}
        />
      </Stack.Navigator>
  )
}

export default MainStack;