import React from 'react';
import { View, Text} from 'react-native';

import BalancePanel from '../../components/BalancePanel'
import EntrySummary from '../../components/EntrySummary'
import EntryList from '../../components/EntryList'
const Main = () => {
  return (
  <View>
    <BalancePanel/>
    <EntrySummary/>
    <EntryList/>
  </View>
  );
}

export default Main;