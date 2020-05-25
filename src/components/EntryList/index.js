import React from 'react';
import { View, StyleSheet } from 'react-native';

import EntryListItem from './EntryListItem'
// import { Container } from './styles';

const EntryList = () => {
  return (
    <View style={styles.container}>
      <EntryListItem/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'gray',
    padding: 5,
    marginHorizontal: 2
  }
})

export default EntryList;