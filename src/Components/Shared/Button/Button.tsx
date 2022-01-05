import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = (props) => {
  const {onPress, text} = props

  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={ onPress }
    >
      <Text style = {styles.buttonText}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'blue',
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonText: {
    color: '#f9f9f9'
  }
})