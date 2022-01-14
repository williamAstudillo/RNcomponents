import React, {useState} from 'react';
import {Button, Modal, Text, View} from 'react-native';

const CustomModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View>
      <Text>CustomModalScreen</Text>
      <Modal
        animationType="slide"
        visible={isVisible}
        // onRequestClose={() => {
        //   Alert.alert('Modal has been closed.');
        //   setModalVisible(!modalVisible);
        // }}
      >
        <View>
          <Text>Modal</Text>
          <Button onPress={() => setIsVisible(false)} title={'Cerrar Modal'} />
        </View>
      </Modal>
      <Button onPress={() => setIsVisible(true)} title={'Abrir Modal'} />
    </View>
  );
};

export default CustomModalScreen;
