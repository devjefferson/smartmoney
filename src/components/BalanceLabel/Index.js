import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const BalanceLabel = () => {
  return (
  <View style={styles.container}>
    <Text style={styles.label}> Saldo Atual</Text>
    <Text style={styles.value}> $2.450,98</Text>
  </View>
  )
}

const styles = StyleSheet.create({
  container:{   
    alignItems: 'center',
    marginHorizontal: 2,
    marginTop: 10

  },
  label: {
    padding: 2,
    fontSize: 14,
    fontWeight: 500,
   
  },
  value:{
    fontSize: 24,
    fontWeight: 200,
   
  }
})
export default BalanceLabel;