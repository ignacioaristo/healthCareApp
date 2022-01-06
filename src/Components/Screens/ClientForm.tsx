import React, { useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

const ClientForm = (props: any) => {

  useEffect(() => {
    if(props.selectedClient){
      setValue('firstName', props.selectedClient.firstName);
      setValue('lastName', props.selectedClient.lastName);
      setValue('email', props.selectedClient.email);
      setValue('age', props.selectedClient.age?.toString());
    }
  }, [props.selectedClient])

  const { control, handleSubmit, reset, setValue } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      age: '',
    },
  });

  const onSubmitPressed = (data) => {
    props.onSubmit({ ...data, id: props.selectedClient?.id })
    reset();
}

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