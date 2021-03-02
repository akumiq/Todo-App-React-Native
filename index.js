/**
 * @format
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons';
import { Provider } from 'react-redux';
import App from './src/App';
import { name as appName } from './app.json';
import store from './src/redux/store/store';

const theme = {
  ...DefaultTheme,
  roundness: 8,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FF9F1C',
    accent: '#fff',
  },
};

export default function Main() {
  return (
    <Provider store={store}>
      <PaperProvider
        settings={{
          icon: (props) => <AwesomeIcon {...props} />,
        }}
        theme={theme}>
        <App />
      </PaperProvider>
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
