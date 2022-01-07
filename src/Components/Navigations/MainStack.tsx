import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import ClientsList from '../Screens/ClientsList';
import LogIn from '../Screens/LogIn';
import AsyncStorage from '@react-native-async-storage/async-storage';
import IconFontisto from 'react-native-vector-icons/Fontisto';

const MainStack = () => {
  const Stack = createNativeStackNavigator();
  const [title, setTitle] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('user').then((response) => {
      const data = JSON.parse(response || "")
      setTitle(data?.username)
    })
  }, [])

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Log In"
        component={LogIn}
        options={{
          headerBackTitleVisible: false,
          // title: title || 'Log in',
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerRight: () => (
            <IconFontisto name="person" size={50} />
          ),
          headerBackTitleVisible: false,
          // title: title || 'Home',
        }}
      />
      <Stack.Screen
        name='Clients'
        component={ClientsList}
        options={{
          headerRight: () => (
            <IconFontisto name="person" size={50} />
          ),
          headerBackTitleVisible: false,
          // title: title || 'Client List',
        }}
      />
    </Stack.Navigator>
  )
}

export default MainStack;