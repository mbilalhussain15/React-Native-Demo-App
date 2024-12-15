import React, { useState } from 'react';
import { Linking, StyleSheet, Text, View, Alert } from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';

const WebScreen = ({ navigation }) => {
  const [url, setUrl] = useState('');

  const handleOpenUrl = () => {
    try {
      Linking.openURL(url).catch(() => Alert.alert('Error', 'There was a problem opening the URL'));
    } catch (error) {
      Alert.alert('Invalid URL', 'Please enter a valid URL');
    }
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter URL</Text>
      <CustomTextInput
        placeholder="http://example.com"
        value={url}
        onChangeText={setUrl}
      />
      <CustomButton title="Open URL" onPress={handleOpenUrl} />
      <CustomButton title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  
});

export default WebScreen;
