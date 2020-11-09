import React from 'react';
import {StatusBar, View, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="#ffffff"
        barStyle="dark-content"
      />

      <Text style={styles.text}>Dashboard Screen</Text>
    </View>
  );
};

export default DashboardScreen;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: '18rem',
  },
});
