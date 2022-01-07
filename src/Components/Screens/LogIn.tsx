import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Logo from '../../assets/logo.svg';


const LogIn = ({ navigation }) => {

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user')
      if (jsonValue !== null) {
        return navigation.navigate('Home')
      }
    } catch (error) {
      return error;
    }
  }
  getData();

  const { control, handleSubmit, formState:{errors},} = useForm();
  // console.log(errors);

  const storageDataUser = async (logInData: IUser) => {
    try {
      const jsonValue = JSON.stringify(logInData)
      return await AsyncStorage.setItem('user', jsonValue)
    } catch (error) {
      return error;
    }
  }
  interface IUser {
    username: string,
    password: string,
  }

  const logInSubmit = async (data: IUser) => {
    try {
      await AsyncStorage.setItem('user', JSON.stringify({
        username: data.username,
        password: data.password,
      }))
      navigation.navigate('Home');
    } catch (error) {
      return error;
    }
  }

  return (
    <View style={styles.container}>
      <Logo width={200} height={200} />
      <Controller
        control={control}
        name='username'
        
        render={({ field: { value, onChange, onBlur } }) => (
          <TextInput
            placeholder='Username'
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            style={styles.input}
          />
        )}
      />
      {/* {errors.username ? <Text>{errors.username.message}</Text> : null} */}
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
        secureTextEntry={true}
        />
      }
      />
      <Text>{errors.username}</Text>
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
    overflow: 'hidden',
  }
})