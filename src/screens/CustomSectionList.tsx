import React from 'react';
import {SectionList, Text, View} from 'react-native';

interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: 'DC Comics',
    data: [
      'Batman',
      'Superman',
      'Robin',
      'Robin',
      'Robin',
      'Robin',
      'Robin',
      'Robin',
      'Robin',
      'Robin',
      'Robin',
    ],
  },
  {
    casa: 'Marvel Comics',
    data: [
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Antman',
      'Antman',
      'Antman',
      'Antman',
      'Antman',
      'Antman',
      'Antman',
      'Antman',
      'Antman',
      'Antman',
      'Antman',
      'Antman',
      'Antman',
      'Antman',
      'Antman',
      'Antman',
      'Antman',
      'Antman',
      'Antman',
      'Antman',
      'Antman',
      'Antman',
      'Antman',
      'Antman',
      'Antman',
    ],
  },
  {
    casa: 'Anime',
    data: ['Kenshin', 'Goku', 'Saitama'],
  },
];

const CustomSectionList = () => {
  return (
    <View>
      <SectionList
        sections={casas}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <Text>{item}</Text>}
        ListHeaderComponent={() => <Text>CustomSectionList</Text>} // con esto hacemos que el header funcione dentro del seccion list
        ListFooterComponent={() => <Text>CustomSectionList</Text>}
        stickySectionHeadersEnabled
        renderSectionHeader={({section: {casa}}) => (
          <View style={{backgroundColor: 'white'}}>
            <Text style={{fontWeight: 'bold', fontSize: 30}}>{casa}</Text>
          </View>
        )}
        renderSectionFooter={({section}) => (
          <Text style={{fontWeight: 'bold', fontSize: 30}}>
            {'Total' + section.data.length}
          </Text>
        )}
        SectionSeparatorComponent={() => (
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              borderBottomWidth: 1,
              opacity: 0.4,
              marginVertical: 5,
            }}
          />
        )}
        ItemSeparatorComponent={() => (
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              borderBottomWidth: 1,
              opacity: 0.4,
              marginVertical: 5,
            }}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CustomSectionList;
