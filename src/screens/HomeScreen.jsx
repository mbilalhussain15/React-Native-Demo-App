import React, { useState, useEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Tts from 'react-native-tts';
import Sound from 'react-native-sound'; 
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';

const HomeScreen = ({ navigation }) => {
  const [inputValue, setInputValue] = useState('');
  const [images, setImages] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImages((prevImages) => {
        if (prevImages.length < 20) {
          console.log("Background task running...");
          return [...prevImages, require('../assets/images/christmasGift.png')];
        }
        return prevImages; 
      });
    }, 2000); 

    return () => clearInterval(intervalId);
  }, []);

  const playSound = () => {
    const sound = new Sound(require('../assets/sounds/christmas.mp3'), (error) => {
      if (error) {
        console.error('Error loading sound:', error);
        return;
      }
      console.log('Sound loaded successfully');
      sound.play((success) => {
        if (success) {
          console.log('Sound played successfully');
        } else {
          console.log('Sound playback failed');
        }
      });
    });
  };

  const speakText = () => {
    if (inputValue) {
      Tts.speak(inputValue); 
    } else {
      alert('Please enter some text');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Welcome</Text>

      <CustomTextInput
        label="Enter Text"
        value={inputValue}
        onChangeText={setInputValue}
        placeholder="Type something..."
      />

      <CustomButton title="Speak Text" onPress={speakText} />
      <CustomButton title="Play Sound" onPress={playSound} />

      <View style={styles.imageContainer}>
        {images.map((image, index) => (
          <Image key={index} source={image} style={styles.dynamicImage} />
        ))}
      </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
  imageContainer: {
    flexDirection: 'row', 
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
  },
  dynamicImage: { width: 100, height: 100, margin: 5 },
});

export default HomeScreen;
