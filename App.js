import React, {useCallback, useState} from 'react';
import {SafeAreaView, StyleSheet, FlatList} from 'react-native';
import Navbar from './src/Navbar.js';
import AddTodo from './src/AddTodo.js';
import Todo from './src/Todo';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = useCallback(
    title => {
      setTodos([
        ...todos,
        {
          id: Date.now().toString(),
          title: title,
        },
      ]);
    },
    [todos, setTodos],
  );

  const removeTodo = id => {
    setTodos(todos.filter(item => item.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
      <AddTodo onSubmit={addTodo} />
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={todos}
        renderItem={({item}) => <Todo todo={item} onRemove={removeTodo} />}
      />
      {/*<ScrollView>
       {todos.map(item => {
          return <Todo todo={item} key={item.id} />;
        })}
      </ScrollView>*/}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    flex: 1,
  },
});
export default App;
