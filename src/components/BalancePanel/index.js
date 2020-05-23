import React from 'react';
import { View } from 'react-native';

import BalancePanelLabel from './BalancePanelLabel'
import BalancePanelChart from './BalancePanelChart'

const BalancePanel = () => {
  return (
  <View>
    <BalancePanelLabel/>
    <BalancePanelChart/>
  </View>
    );
}

export default BalancePanel;