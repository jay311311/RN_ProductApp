import React, { useContext } from 'react';
import { View, StyleSheet, Pressable, ViewStyle } from 'react-native';
import { RadioGroupContext } from './RadioButtonGroup';

const RadioButtonItem = ({ value, children, disabled, containerStyle }) => {
  const { onSelected, selected } = useContext(RadioGroupContext);

  const isSelected = () => {
    return selected === value;
  };

  const triggerRadioButton = () => {
    if (onSelected && !disabled) {
      onSelected(value);
    }
  };

  return (
    <Pressable
      onPress={triggerRadioButton}
      style={[styles.radioButtonItemContainer, containerStyle]}
    >
      <View
        style={[
          styles.radioButtonCircle,
          { borderColor: isSelected() ? "black" : "gray" },
        ]}
      >
        {isSelected() && (
          <View
            style={{
              backgroundColor: disabled ? "gray" : "black",
              width: 12,
              height: 12,
              borderRadius: 50,
            }}
          />
        )}
      </View>
      {children && (
        <Pressable style={styles.label} onPress={triggerRadioButton}>
          {children}
        </Pressable>
      )}
    </Pressable>
  );
};

export default RadioButtonItem;

const styles = StyleSheet.create({
  radioButtonItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButtonCircle: {
    borderWidth: 1,
    padding: 2,
    width: 24,
    height: 24,
    marginVertical:3,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    marginLeft: 8,
  },
});