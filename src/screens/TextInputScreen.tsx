import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export const TextInputScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const onChange = (value: string, property: string) => {
    setForm({
      ...form,
      [property]: value,
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <View>
          <Text>Text inputs</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Ingrese su nombre"
            autoCorrect={true}
            autoCapitalize="words"
            onChangeText={value => onChange(value, 'name')}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Ingrese su email"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={value => onChange(value, 'email')}
            keyboardType="email-address"
          />
          <Text>{JSON.stringify(form, null, 30)}</Text>
          <Text>{JSON.stringify(form, null, 30)}</Text>
          <Text>{JSON.stringify(form, null, 30)}</Text>
          <Text>{JSON.stringify(form, null, 30)}</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Ingrese su teléfono"
            onChangeText={value => onChange(value, 'phone')}
            keyboardType="number-pad"
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    marginHorizontal: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderColor: 'rgba(0,0,0,0.3)',
    marginVertical: 10,
  },
});
