import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ClientsList from '../Screens/ClientsList';
import Profile from '../Screens/Profile';

const Tabs = () => {

  const Tab = createBottomTabNavigator();

  return (
  <Tab.Navigator>
    <Tab.Screen name='Client List' component={ClientsList} />
    <Tab.Screen name='Profile' component={Profile} />
  </Tab.Navigator>
  )
}

export default Tabs;
