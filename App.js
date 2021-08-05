import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, TextInput } from 'react-native-paper';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

import SignUpScreen from './components/Auth/SignUpScreen';

export default function App() {
  return (
    <>
      <SignUpScreen />
    </>
  );
}


