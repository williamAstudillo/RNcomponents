import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import {Animation101} from '../screens/Animation101';
import {Animation102} from '../screens/Animation102';
import Switch from '../screens/Switch';
import {AlertScreen} from '../screens/AlertScreen';
import {TextInputScreen} from '../screens/TextInputScreen';
import {PullToRefresch} from '../screens/PullToRefresch';
import CustomSectionList from '../screens/CustomSectionList';
import CustomModalScreen from '../screens/CustomModalScreen';

const Stack = createStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Animation101" component={Animation101} />
      <Stack.Screen name="Animation102" component={Animation102} />
      <Stack.Screen name="Switch" component={Switch} />
      <Stack.Screen name="AlertScreen" component={AlertScreen} />
      <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
      <Stack.Screen name="PullToRefresch" component={PullToRefresch} />
      <Stack.Screen name="CustomSectionList" component={CustomSectionList} />
      <Stack.Screen name="CustomModalScreen" component={CustomModalScreen} />
    </Stack.Navigator>
  );
};
