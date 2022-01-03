import React from 'react';
import { View, Text } from 'react-native';
import {styles} from './stylesHeader';

const Header = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Health Care</Text>
    </View>
  )
}

export default Header;