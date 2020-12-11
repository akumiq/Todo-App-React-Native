import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const AddTodo = (props) => {
  return (
    <View>
      <TextInput
        placeholder="new todo..."
        onChangeText={props.onChangeText}
        value={props.value}
        style={styles.textInput}
      />

      <TouchableOpacity onPress={props.onPress} style={styles.btnAdd}>
        <Text style={styles.textAdd}>Add Todo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTodo;

const styles = EStyleSheet.create({
  textInput: {
    marginTop: '20rem',
    marginHorizontal: '20rem',
    paddingHorizontal: '14rem',
    borderWidth: 1,
    borderRadius: '10rem',
    borderColor: '#ddd',
  },
  btnAdd: {
    marginVertical: '20rem',
    marginHorizontal: '20rem',
    paddingVertical: '10rem',
    alignItems: 'center',
    backgroundColor: '#949599',
    borderRadius: '10rem',
  },
  textAdd: {
    fontSize: '14rem',
    color: '#ffffff',
  },
});
