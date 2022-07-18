import React, {useCallback, useState} from 'react';
import {View, TextInput, Button, StyleSheet, Alert} from 'react-native';

const AddTodo = ({onSubmit}) => {
  const [value, setValue] = useState('');
  const pressButton = useCallback(() => {
    if (value.trim()) {
      onSubmit(value);
      setValue('');
    } else {
      Alert.alert('Empty string');
    }
  }, [onSubmit, value]);
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        style={styles.input}
        placeholder={'Add Todo...'}
        onChangeText={setValue}
      />
      <Button style={styles.button} title={'Add'} onPress={pressButton} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  input: {
    width: '70%',
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 5,
  },
  button: {
    width: '20%',
    backgroundColor: 'blue',
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default AddTodo;
