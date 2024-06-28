import { View, ViewStyle } from 'react-native';
import React, { createContext } from 'react';
import RadioButtonItem from './RadioButtonItem';

const RadioGroupContext = createContext({});

const RadioButtonGroup = ({ selected, children, onSelected, containerStyle }) => {
  const { Provider } = RadioGroupContext;

  return (
    <Provider value={{ onSelected, selected }}>
      <View style={[containerStyle]}>
        {children}
      </View>
    </Provider>
  );
};

RadioButtonGroup.RadioButtonItem = RadioButtonItem;

export { RadioGroupContext };
export default RadioButtonGroup;
