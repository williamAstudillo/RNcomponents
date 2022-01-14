import React, {useState} from 'react';
import {RefreshControl, ScrollView, Text, View} from 'react-native';

export const PullToRefresch = () => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      console.log('holaaaaaaaaaa');
      setRefreshing(false);
    }, 1000);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={() => onRefresh()}
          progressViewOffset={10} // solo android
          progressBackgroundColor="#5856D6"
          colors={['white', 'red', 'orange']}
          tintColor="white" // ios
          title="refreshing"
          titleColor="white"
        />
      }>
      <View>
        <Text>Pull to refresh</Text>
      </View>
    </ScrollView>
  );
};
