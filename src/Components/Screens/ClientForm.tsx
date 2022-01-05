import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { stringify, v4 as uuidv4 } from 'uuid';

const ClientForm = (props: any) => {

  const onSubmitPressed = (data) => {
    const newClient = {
      id: uuidv4(),
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      age: data.age,
    }

    props.setClientList([...props.clientList, newClient])

    setValue('firstName', '');
    setValue('lastName', '');
    setValue('email', '');
    setValue('age', '');
  }

  const { control, handleSubmit, reset, setValue } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      age: '',
    },
  });

  setValue('firstName', props.selectedClient.firstName);
  setValue('lastName', props.selectedClient.lastName);
  setValue('email', props.selectedClient.email);
  setValue('age', props.selectedClient.age?.toString());

  return (
    <View>
      <Text>Client Form:</Text>
      <View>
        <Controller
          control={control}
          name='firstName'
          render={({ field: { value, onChange, onBlur } }) =>
            <TextInput
              placeholder='First Name'
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />}
        />
        <Controller
          control={control}
          name='lastName'
          render={({ field: { value, onChange, onBlur } }) =>
            <TextInput
              placeholder='Last Name'
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />}
        />
        <Controller
          control={control}
          name='email'
          render={({ field: { value, onChange, onBlur } }) =>
            <TextInput
              placeholder='Email'
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />}
        />
        <Controller
          control={control}
          name='age'
          render={({ field: { value, onChange, onBlur } }) =>
            <TextInput
              placeholder='Age'
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
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