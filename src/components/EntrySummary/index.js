import React from 'react';
import { View,Text, StyleSheet } from 'react-native';

import EntrySummaryList from './EntrySummaryList'
import EntrySummaryChart from './EntrySummaryChart'

const EntrySummary = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.entryTitle}>Categoria:</Text>
      <View style={styles.entryColumn}>
        <EntrySummaryChart/>
        <EntrySummaryList/>
      </View>     
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    margin: 2,
    backgroundColor: 'gray',
    padding: 5
  },
  entryColumn:{
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  entryTitle: {
    fontSize: 20,
    color: 'white'
  }
})
export default EntrySummary;