import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import SignUpScreen from './components/Auth/SignUpScreen';
import LoginScreen from './components/Auth/LoginScreen';
import LoadingScreen from './components/Loading/LoadingScreen';
import HomeScreen from './components/Home/HomeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Регистрация" component={SignUpScreen} />
          <Stack.Screen name="login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};




