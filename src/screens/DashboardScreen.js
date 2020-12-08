import React, {useState} from 'react';
import {StatusBar, View, Text, FlatList} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Header from '../components/Header';

const DashboardScreen = () => {
  // const [data, setData] = useState([
  //   {key: 1, title: 'Create App Pariwisata'},
  //   {key: 2, title: 'Buy Coffee'},
  //   {key: 3, title: 'Play Games'},
  // ]);

  const data = [
    {title: 'Create App Pariwisata'},
    {title: 'Buy Coffee'},
    {title: 'Play Games'},
  ];

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
          data={data}
          keyExtractor={(item, index) => item + index.toString()}
          renderItem={({item, index}) => {
            return (
              <View key={index}>
                <Text>{item.title}</Text>
              </View>
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
