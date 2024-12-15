import React, { useState } from 'react';
import { Alert, Image, StyleSheet, View } from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import Toast from 'react-native-toast-message';
import CustomButton from '../components/CustomButton';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      Toast.show({
        type: 'success',
        text1: 'Login Successful',
        position: 'bottom',
        bottomOffset: 50,    
        text1Style: {
          fontSize: 20, 
          fontWeight: 'bold', 
        },
      });
      navigation.navigate('Main');
    } else {
      Alert.alert('Login Failed', 'Incorrect Username or Password');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/srh.png')} style={styles.image} />
      <CustomTextInput
        label="Username"
        value={username}
        onChangeText={setUsername}
        placeholder="Enter username"
      />
      <CustomTextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        placeholder="Enter password"
        secureTextEntry
      />
       <CustomButton title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20, 
  },
  image: { 
    width: 120, 
    height: 120, 
    borderRadius: 60, 
    marginBottom: 20, 
    resizeMode: 'cover' 

  },
});

export default LoginScreen;
