import React, {useEffect} from 'react';
import {Dimensions, BackHandler} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import {SplashScreen, HomeScreen, AddTodoScreen} from '../src/screens';

const Stack = createStackNavigator();

const App = () => {
  const entireScreenWidth = Dimensions.get('window').width;
  EStyleSheet.build({$rem: entireScreenWidth / 320});

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        BackHandler.exitApp();
      },
    );

    return () => backHandler.remove();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />

        <Stack.Screen name="HomeScreen" component={HomeScreen} />

        <Stack.Screen name="AddTodoScreen" component={AddTodoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
