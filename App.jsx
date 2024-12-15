import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import StackNavigator from './src/navigation/StackNavigator';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <>
      <NavigationContainer>
      <StackNavigator />
      </NavigationContainer>
      <Toast />
    </>
  );
};

export default App;
