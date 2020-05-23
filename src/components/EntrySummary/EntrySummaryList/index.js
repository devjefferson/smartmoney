import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

// import { Container } from './styles';

const EntrySummaryList = () => {
  const Data = [
    {
      key: 'Alimentação: $201',
      icon: '*'
      
    },
    {
      key: 'Combustivel: $58',
      icon: '*'
      
    },
    {
      key: 'Aluguel: $800',
      icon: '*'
    },
    {
      key: 'Lazer: $325',
      icon: '*'
    },
    {
      key: 'Outros: $1200',
      icon: '*'
    }
  ]
  return (
    <View style={styles.container}>
      <FlatList  data={Data}
      renderItem={({item})=>(<Text>{item.icon} {item.key}</Text>)}
      >
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
container: {
  paddingHorizontal: 20
}
})

export default EntrySummaryList;