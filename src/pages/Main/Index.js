import React from 'react';
import { View, Text} from 'react-native';

import BalancePanel from '../../components/BalancePanel'
import EntrySummary from '../../components/EntrySummary'
const Main = () => {
  return (
  <View>
    <BalancePanel/>
    <EntrySummary/>
  </View>
  );
}

export default Main;