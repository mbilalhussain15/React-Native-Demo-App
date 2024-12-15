import React, {useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';

const HelloWorldScreen = ({ navigation }) => {
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, World!</Text>
      <CustomButton
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HelloWorldScreen;
