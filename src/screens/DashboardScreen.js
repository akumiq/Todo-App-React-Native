import React, {useState} from 'react';
import {StatusBar, View, FlatList} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Header from '../components/atom/Header';
import TodoList from '../components/molekul/TodoListComponent';

const DashboardScreen = () => {
  const [todos, setTodos] = useState([
    {key: 1, title: 'Create App Pariwisata'},
    {key: 2, title: 'Buy Coffee'},
    {key: 3, title: 'Play Games'},
  ]);

  const onHandleTodos = (key) => {
    setTodos((prevState) => {
      return prevState.filter((todo) => todo.key !== key);
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="#ffffff"
        barStyle="dark-content"
      />

      <Header />

      <View style={styles.wrapperContent}>
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
    marginTop: '30rem',
  },
});
