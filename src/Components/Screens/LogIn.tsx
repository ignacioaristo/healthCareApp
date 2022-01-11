import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import AsyncStorage from '@react-native-async-storage/async-storage';
import IconEntypo from 'react-native-vector-icons/Entypo';
import Logo from '../../assets/logo.svg';


const LogIn = ({ navigation }) => {

  const [showPassword, setShowPassword] = useState(false)

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

  const { control, handleSubmit } = useForm();

  // console.log(errors.username?.message, errors.password?.message);

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

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
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
        rules={{ required: 'Username is required' }}
        render={({ field: { value, onChange, onBlur }, fieldState:{error} }) => (
          <>
            <TextInput
              placeholder='Username'
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              style={styles.input}
            />
            {error && (<Text>{error?.message}</Text>)}
          </>
          )
        }
      />
      <Controller
        control={control}
        name='password'
        rules={{ required: 'Password is required'}}
        render={({ field: { value, onChange, onBlur }, fieldState:{error} }) =>
        <>
        <View style={styles.showPassword}>
          <TextInput
            placeholder='Password'
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            style={styles.input}
            secureTextEntry={showPassword ? false : true}
          />
          <IconEntypo onPress={handleShowPassword} name='eye' size={20} />
        </View>
          {error && (<Text>{error?.message}</Text>)}
        </>
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
    overflow: 'hidden',
  },
  showPassword: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
})