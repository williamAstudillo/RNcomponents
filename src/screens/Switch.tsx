import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {CustomSwitch} from '../components/CustomSwitch';

interface State {
  isActivate: boolean;
  isHungry: boolean;
  isHappy: boolean;
}
const Switch = () => {
  const [state, setState] = useState<State>({
    isActivate: true,
    isHungry: true,
    isHappy: true,
  });
  const {isActivate} = state;
  const onChange = (value: boolean, property: string) => {
    setState({
      ...state,
      [property]: value,
    });
  };
  return (
    <View>
      <CustomSwitch
        isOn={isActivate}
        onChange={value => onChange(value, 'isActivate')}
      />
      <CustomSwitch
        isOn={isActivate}
        onChange={value => onChange(value, 'isHungry')}
      />
      <CustomSwitch
        isOn={isActivate}
        onChange={value => onChange(value, 'isHappy')}
      />
      <Text>{JSON.stringify(state, null, 10)}</Text>
    </View>
  );
};

export default Switch;
