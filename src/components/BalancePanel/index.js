import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import BalancePanelLabel from './BalancePanelLabel'
import BalancePanelChart from './BalancePanelChart'

const BalancePanel = () => {
  return (
  <View>
    <BalancePanelLabel/>
    <BalancePanelChart/>
    <TouchableOpacity style={styles.ButtonEntry}> 
      <Text style={styles.ButtonLabel}>Adicionar</Text> 
    </TouchableOpacity>
  </View>
    );
}

const styles = StyleSheet.create({
  ButtonEntry:{
    marginHorizontal: 2,
    marginTop: 2,
    backgroundColor: 'blue',
    borderRadius: 4,
    paddingVertical: 5,
    alignItems: "center"
  },
  ButtonLabel:{
    fontSize: 18,
    color: 'white'
    
  }

})
export default BalancePanel;