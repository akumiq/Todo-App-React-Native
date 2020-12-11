import React from 'react';
import {View, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>My Todos</Text>
    </View>
  );
};

export default Header;

const styles = EStyleSheet.create({
  container: {
    paddingVertical: '12rem',
    paddingTop: '25rem',
    backgroundColor: '#949599',
  },
  textTitle: {
    fontSize: '18rem',
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
});
