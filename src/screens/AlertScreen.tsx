import React from 'react';
import {Alert, Button, Text, View} from 'react-native';

export const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: true}, // no funciona en ios
    );
  };
  return (
    <View>
      <Text>Hola</Text>
      <Button title="show alert" onPress={showAlert} />
    </View>
  );
};
