import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import { useForm, Controller } from 'react-hook-form';

const ClientForm = (props: any) => {

  const onSubmitPressed = (data) => {
    const newClient = {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      age: data.age,
    }
    props.setClientList([...props.clientList, newClient]);
  }

  const {control, handleSubmit} = useForm();
  return(
    <View>
      <Text>Client Form:</Text>
      <View>
        <Controller
        control={control}
        name='first_name'
        render={({field: {value, onChange, onBlur}}) =>
        <TextInput
          placeholder='First Name'
          onChangeText={onChange}
          onBlur={onBlur}
        />}
        />
        <Controller
        control={control}
        name='last_name'
        render={({field: {value, onChange, onBlur}}) =>
        <TextInput
          placeholder='Last Name'
          onChangeText={onChange}
          onBlur={onBlur}

        />}
        />
        <Controller
        control={control}
        name='age'
        render={({field: {value, onChange, onBlur}}) =>
        <TextInput
          placeholder='Age'
          onChangeText={onChange}
          onBlur={onBlur}
        />}
        />
        <Controller
        control={control}
        name='email'
        render={({field: {value, onChange, onBlur}}) =>
        <TextInput
          placeholder='Email'
          onChangeText={onChange}
          onBlur={onBlur}
        />}
        />
      </View>
      <TouchableOpacity onPress={handleSubmit(onSubmitPressed)}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ClientForm;