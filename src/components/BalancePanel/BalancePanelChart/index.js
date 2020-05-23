import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// import { Container } from './styles';

const BalancePanelChart = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}> BalancePanelChart </Text>
    </View>
    );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    marginHorizontal: 2
  },
  label: {
    alignSelf: "center",
    fontSize: 18,
    color: 'red'
  }
})

export default BalancePanelChart;