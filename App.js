import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, TextInput } from 'react-native-paper';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

import SignUpScreen from './components/Auth/SignUpScreen';
import LoginScreen from './components/Auth/LoginScreen';
import LoadingScreen from './components/Loading/LoadingScreen';
import HomeScreen from './components/Home/HomeScreen';

export default function App() {
  return (
    <View style={styles.loading}>
      {/* <SignUpScreen />*/}
      {/*<LoginScreen />*/}
      {/*<LoadingScreen />*/}
      <HomeScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  loading:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})



