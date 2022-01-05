import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Button from '../Shared/Button/Button';

const Home = ({ navigation }) => {
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