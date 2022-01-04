import React from 'react';
import { View, Image } from 'react-native';
import {styles} from './stylesHeader';

const Header = () => {
  return(
    <View style={styles.container}>
      <Image style={[styles.imageTitle]} source={{uri: 'https://www.tidingsavior.com/wp-content/uploads/2020/02/hc.png'}} />
    </View>
  )
}

export default Header;