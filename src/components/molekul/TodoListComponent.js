import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const TodoList = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text style={styles.item}>{props.titleList}</Text>
    </TouchableOpacity>
  );
};

export default TodoList;

const styles = EStyleSheet.create({
  item: {
    padding: '14rem',
    marginTop: '10rem',
    borderWidth: 1,
    borderRadius: '10rem',
    borderColor: '#bbb',
  },
});
