import React from 'react';
import { View, Image, SafeAreaView } from 'react-native';
import {styles} from './stylesHeader';

const Header = () => {
  return(
    <SafeAreaView style={styles.container}>
      <Image style={[styles.imageTitle]} source={{uri: 'https://www.tidingsavior.com/wp-content/uploads/2020/02/hc.png'}} />
    </SafeAreaView>
  )
}

export default Header;