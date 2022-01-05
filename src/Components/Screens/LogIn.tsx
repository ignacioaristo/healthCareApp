import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LogIn = ({ navigation }) => {

  useEffect(() => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('user')
        console.log(jsonValue);
        if(jsonValue !== null){
          return navigation.navigate('Home')
        }
      } catch(error) {
        return error;
      }
    }
    getData();
  })

  const [logInData, setLogInData] = useState({
    username: '',
    password: ''
  });

  const { control, handleSubmit, reset, setValue } = useForm();

  const storageDataUser = async (logInData: any) => {
    try {
      const jsonValue = JSON.stringify(logInData)
      await AsyncStorage.setItem('user', jsonValue)
    } catch (error) {
      return error;
    }
  }

  const logInSubmit = (data) => {
    setLogInData({
      username: data.username,
      password: data.password,
    })
    storageDataUser(logInData);
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
          <Controller
            control={control}
            name='username'
            render={({ field: { value, onChange, onBlur } }) =>
              <TextInput
                placeholder='Username'
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                style={styles.input}
              />
            }
          />
          <Controller
            control={control}
            name='password'
            render={({ field: { value, onChange, onBlur } }) =>
              <TextInput
                placeholder='Password'
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                style={styles.input}
              />
            }
          />
          <TouchableOpacity onPress={handleSubmit(logInSubmit)}>
            <Text style={styles.logInButton}>
              Log In
            </Text>
          </TouchableOpacity>
      </View>
  )
}

export default LogIn;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  input: {
    width: '50%',
    height: 45,
    margin: 15,
    fontSize: 17,
    borderBottomWidth: 2,
    borderColor: 'grey',
    textAlign: 'center'
  },
  logInButton: {
    width: 100,
    padding: 5,
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'blue',
    borderRadius: 15,
    overflow:'hidden',
  }
})