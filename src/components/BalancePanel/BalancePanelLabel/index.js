import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

// import { Container } from './styles';

const BalancePanelLabel = ({children}) => {
  return (
  <View style={styles.container}>
    <Text style={styles.labelTitle}> Saldo Atual</Text>
    <Text style={styles.labelValue}> $2.450,98</Text>
  </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    backgroundColor: 'gray',
    alignItems: 'center',
    marginHorizontal: 2,
    marginTop: 2

  },
  labelTitle: {
    
    padding: 10,
    fontSize: 16,
    fontWeight: 500,
    color: 'white'
  },
  labelValue:{
    fontSize: 36,
    fontWeight: 200,
    color: 'white'
  }
})
export default BalancePanelLabel;