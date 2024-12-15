import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HelloWorldScreen from '../screens/HelloWorldScreen';
import LoginScreen from '../screens/LoginScreen';
import BottomTabNavigator from './BottomTabNav';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="HelloWorld">
      <Stack.Screen name="HelloWorld" component={HelloWorldScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Main" component={BottomTabNavigator} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

export default StackNavigator;
