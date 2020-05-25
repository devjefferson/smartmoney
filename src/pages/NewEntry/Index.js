import React from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

// import { Container } from './styles';
import BalanceLabel from '../../components/BalanceLabel'

const NewEntry = () => {
  return (
    <View style={styles.conatiner}>
    <BalanceLabel/>
    <View>
      <TextInput style={styles.input}/>
      <TextInput style={styles.input}/>
      <Button title='GPS'/>
      <Button title='Camera'/>
    </View>
    <View>
      <Button title='Adicionar'/>
      <Button title='Cancelar'/>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  conatiner:{
    padding: 20
  },
  input:{
    borderColor: '#000',
    borderWidth: 1
  }
})
export default NewEntry;