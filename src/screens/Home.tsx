/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from '../theme/appTheme';
import {MenuItem} from '../interfaces/interface';
import {menuItems} from '../data/menuItems';

const Home = () => {
  const navigation = useNavigation();

  const renderMenuItem = ({icon, name, component}: MenuItem) => {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <TouchableOpacity onPress={() => navigation.navigate(component as any)}>
        <View style={{flexDirection: 'row'}}>
          <Icon
            name={icon}
            color="#5856D6"
            size={20}
            style={{marginRight: 10}}
          />

          <Text style={{fontSize: 15}}>{name}</Text>
          <View style={{flex: 1}} />
          <Icon
            name="chevron-forward-outline"
            color="#5856D6"
            size={20}
            style={{marginHorizontal: 10}}
          />
        </View>
      </TouchableOpacity>
    );
  };

  const header = () => {
    return <Text style={styles.title}>Opciones de Menú</Text>;
  };

  const separator = () => {
    return (
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          borderBottomWidth: 1,
          opacity: 0.4,
          marginVertical: 5,
        }}
      />
    );
  };

  return (
    <View style={styles.globalMargin}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => renderMenuItem(item)}
        keyExtractor={item => item.name}
        ListHeaderComponent={header}
        ItemSeparatorComponent={separator}
      />
    </View>
  );
};

export default Home;
