import React, { useEffect } from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { stringify, v4 as uuidv4 } from 'uuid';

const ClientForm = (props: any) => {

  const onSubmitPressed = (data) => {
    const newClient = {
      id: uuidv4(),
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      age: data.age,
    }
    console.log(props.clientList);
    console.log(data)
    if(newClient.id !== props.selectedClient.id){
      return  props.setClientList([...props.clientList, newClient])
    }
  }

  const {control, handleSubmit, reset, setValue} = useForm();
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
          value={props.selectedClient.first_name}
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
          value={props.selectedClient.last_name}
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
          value={props.selectedClient.email}
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
          value={props.selectedClient.age}
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