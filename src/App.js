import React from 'react';
import {Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import SplashScreen from '../src/screens/SplashScreen';
import DashboardScreen from '../src/screens/DashboardScreen';

const Stack = createStackNavigator();

const App = () => {
  const entireScreenWidth = Dimensions.get('window').width;
  EStyleSheet.build({$rem: entireScreenWidth / 320});

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />

        <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
