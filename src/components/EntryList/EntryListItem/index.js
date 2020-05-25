import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

// import { Container } from './styles';

const EntryListItem = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.entryTitle}>Ultimos Lançamentos</Text>
      <FlatList data={[{key: 'Dr pc: $200'}, {key: 'Altonivel: $200'}, {key: 'Tania Fashion: $200'}]} 
      renderItem={({item})=>(
      <Text style={styles.entryItem}> - {item.key}</Text>
      )}/>
    </View>
    );
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  entryTitle: {
    fontSize: 20,
    color: 'white'
  },
  entryItem:{
    fontSize: 16,
    fontWeight: 300,
    color: 'white',
    paddingLeft: 10
  }
})

export default EntryListItem;