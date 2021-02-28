import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('AddTodoScreen')}
        style={styles.btn}>
        <Text>Next Page</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = EStyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  btn: {
    borderWidth: '1rem',
    borderRadius: '10rem',
    paddingVertical: '5rem',
    paddingHorizontal: '10rem',
    marginTop: '40rem',
  },
});
