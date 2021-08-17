import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';


import SignUpScreen from './components/Auth/SignUpScreen';
import LoginScreen from './components/Auth/LoginScreen';
import LoadingScreen from './components/Loading/LoadingScreen';
import HomeScreen from './components/Home/HomeScreen';



const Stack = createStackNavigator();

export default function App() {

  const [isloggedin, setIsloggedin] = useState(null);

  useEffect( async () => {
    const token = await AsyncStorage.getItem('token')
    if(token) {
        setIsloggedin(true);
    }else {
      setIsloggedin(false);
    }
  }, []);

  return (
    
      <NavigationContainer>
        <Stack.Navigator
          //маха стрелка назад при
          screenOptions={{
            headerShown: false
          }}
        >{
          isloggedin == null ?
            (<Stack.Screen name="loading" component={LoadingScreen} /> )
          : isloggedin == true ?
          (  <Stack.Screen name="home" component={HomeScreen} /> )

          :
          (<>
            <Stack.Screen name="Регистрация" component={SignUpScreen} />
            <Stack.Screen name="login" component={LoginScreen} />
            </>
          )
          
        }
        </Stack.Navigator>
      </NavigationContainer>
  );
};




