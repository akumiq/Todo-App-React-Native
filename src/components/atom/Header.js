import React from 'react';
import {StatusBar, View, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const Header = () => {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="coral" barStyle="dark-content" />

      <Text style={styles.textTitle}>My Todos</Text>
    </View>
  );
};

export default Header;

const styles = EStyleSheet.create({
  container: {
    paddingVertical: '12rem',
    paddingTop: '25rem',
    backgroundColor: 'coral',
  },
  textTitle: {
    fontSize: '18rem',
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
});
