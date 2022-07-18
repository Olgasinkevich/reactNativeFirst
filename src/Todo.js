import React from 'react';
import {Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';

const Todo = ({todo, onRemove}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => console.log('press')}
      onLongPress={onRemove.bind(null, todo.id)}>
      <ScrollView style={styles.todo}>
        <Text style={styles.text}>{todo.title}</Text>
      </ScrollView>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  todo: {
    marginBottom: 10,
    padding: 15,
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 5,
  },
  text: {
    color: 'black',
  },
});

export default Todo;
