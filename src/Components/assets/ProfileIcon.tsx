import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const Profile = ({ navigation }: NativeStackScreenProps<any>) => {

  const iconOnPress = () => {
    navigation.navigate('Home')
  }

  return(
    <View>
      <TouchableOpacity onPress={() => iconOnPress()}>
        <IconFontisto name="person" size={50} />
      </TouchableOpacity>
    </View>
  )
}

export default Profile;