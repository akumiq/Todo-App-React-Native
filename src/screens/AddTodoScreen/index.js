import React from 'react';
import {View, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const AddTodoScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Add Todo Screen</Text>
    </View>
  );
};

export default AddTodoScreen;

const styles = EStyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
