import React, {useState} from 'react';
import {StatusBar, View, Text, FlatList} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Header from '../components/atom/Header';
import TodoList from '../components/molekul/TodoListComponent';
import AddTodo from '../components/molekul/AddTodoComponent';

const DashboardScreen = () => {
  const [todos, setTodos] = useState([
    {key: 1, title: 'Create App Pariwisata'},
    {key: 2, title: 'Buy Coffee'},
    {key: 3, title: 'Play Games'},
  ]);
  const [newTodo, setNewTodo] = useState('');

  const onHandleTodos = (key) => {
    setTodos((prevState) => {
      return prevState.filter((todo) => todo.key !== key);
    });
  };

  const onChangeText = (val) => {
    setNewTodo(val);
  };

  const onHandleAddTodo = (text) => {
    if (newTodo !== '') {
      setTodos((prevState) => {
        return [{key: Math.random().toString(), title: text}, ...prevState];
      });
      setNewTodo('');
    } else {
      return null;
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="#ffffff"
        barStyle="dark-content"
      />

      <Header />

      <AddTodo
        onChangeText={(val) => onChangeText(val)}
        value={newTodo}
        onPress={() => onHandleAddTodo(newTodo)}
      />

      <View style={styles.wrapperContent}>
        <Text style={styles.title}>List Todos</Text>

        <FlatList
          data={todos}
          keyExtractor={(item, index) => item + index.toString()}
          renderItem={({item, index}) => {
            return (
              <TodoList
                onPress={() => onHandleTodos(item.key)}
                titleList={item.title}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default DashboardScreen;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  wrapperContent: {
    paddingHorizontal: '20rem',
    marginTop: '20rem',
  },
  title: {
    fontSize: '16rem',
    fontWeight: 'bold',
    marginBottom: '10rem',
  },
});
