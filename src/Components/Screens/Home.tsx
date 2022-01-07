import React, { useEffect } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../Shared/Button/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const Home = ({ navigation }: NativeStackScreenProps<any>) => {

  useEffect(() => {
    AsyncStorage.getItem('user').then((response) => {
      const data = JSON.parse(response || "")
      navigation.setOptions({ headerTitle: data?.username })
    })
  }, [])

  return (
    <View>
        <Button
          text= 'Client List'
          onPress = {() => {
            navigation.navigate('Clients')
          }}
          />
        <Text style={styles.main}>THIS IS THE HOME PAGE</Text>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  main: {
    textAlign: 'center'
  }
})