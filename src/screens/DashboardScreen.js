import React, {useState} from 'react';
import {StatusBar, View, Text, FlatList} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Header from '../components/atom/Header';
import TodoList from '../components/molekul/TodoListComponent';
import AddTodo from '../components/molekul/AddTodoComponent';

const DashboardScreen = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({
    key: '',
    title: '',
  });
  const dataNull = [{title: 'Maaf, Todo Anda Tidak Ada'}];

  const onChangeText = (val) => {
    setNewTodo({
      key: Math.random().toString(),
      title: val,
    });
  };

  const onHandleSubmit = (text) => {
    if (newTodo.key !== '' && newTodo.title !== '') {
      setTodos((prevState) => {
        return [{key: Math.random().toString(), title: text}, ...prevState];
      });
      setNewTodo({
        key: '',
        title: '',
      });
    } else {
      return null;
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="#949599"
        barStyle="light-content"
      />

      <Header />

      <AddTodo
        onChangeText={(val) => onChangeText(val)}
        value={newTodo.title}
        onHandleSubmit={() => onHandleSubmit(newTodo.title)}
      />

      <View style={styles.wrapperContent}>
        <Text style={styles.title}>List Todos</Text>

        <FlatList
          data={todos && todos.length > 0 ? todos : dataNull}
          keyExtractor={(item, index) => item + index.toString()}
          renderItem={({item}) => {
            return <TodoList titleList={item.title} />;
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
