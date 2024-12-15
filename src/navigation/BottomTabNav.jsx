import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import WebScreen from '../screens/WebScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Alert, Button, View } from 'react-native';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const PlaceholderScreen = () => null;
const handleLogout = (navigation) => {
  Alert.alert('Logged Out', 'You have been logged out');
  navigation.navigate('HelloWorld'); 
};

const BottomTabNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Dashboard"
    >
      <Drawer.Screen name="Dashboard" component={Tabs} />
      <Drawer.Screen
        name="Logout"
        component={PlaceholderScreen} 
        listeners={({ navigation }) => ({
          focus: () => {
            handleLogout(navigation); 
          },
        })}
      />
    </Drawer.Navigator>
  );
};

const Tabs = ({ navigation }) => {
  return (
    <Tab.Navigator
      initialRouteName="Home" 
      screenOptions={{
        headerRight: () => (
          <Icon
            name="menu"
            size={30}
            color="black"
            onPress={() => navigation.openDrawer()} 
            style={{ marginRight: 10 }}
          />
        ),
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Web"
        component={WebScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="language" size={size} color={color} />
          ),
        }}
      />
     
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
