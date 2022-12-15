import 'react-native-gesture-handler';
import React from 'react';
import { useColorScheme } from 'react-native';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
// import { Navigator } from './src/navigator/Navigator';
import { Tabs } from './src/navigator/Tabs';

export const App = () => {
  const theme = useColorScheme();

  return (
    <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
      {/* // <NavigationContainer theme={DefaultTheme}> */}
      {/* <Navigator /> */}
      <Tabs />
    </NavigationContainer>
  )
}

export default App;
