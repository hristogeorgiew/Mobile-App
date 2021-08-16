import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, TextInput } from 'react-native-paper';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

const LoginScreen = (props) => {
  return (
    <>
      <KeyboardAvoidingView behavior="padding">
        <StatusBar backgroundColor="gray" barStyle="light-content" />
        <Text style={styles.title}>Welcome to</Text>
        <Text style={styles.logo}>Nsys App</Text>
        <View style={styles.line}></View>
        <Text style={styles.newAcount}>Login</Text>

    
        <TextInput
          style={styles.input}
          label="Email"
          mode="outlined"
          theme={{ colors: { primary: "blue" } }}
        />
        <TextInput
          style={styles.input}
          label="Password"
          secureTextEntry={true}
          mode="outlined"
          theme={{ colors: { primary: "blue" } }}
        />

        <Button
          style={styles.input}
          mode="contained"
          onPress={() => console.log('Pressed')}>
           Влез
        </Button>
        <TouchableOpacity >
          <Text 
            style={styles.input}
            onPress={() => props.navigation.navigate("Регистрация")}
          >
            Нямате регистрация ?
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  line: {
    borderBottomColor: "blue",
    borderBottomWidth: 4,
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 150,
    marginTop: 4
  },

  logo: {
    fontSize: 30,
    marginLeft: 18,
    color: "blue"
  },

  title: {
    fontSize: 35,
    marginLeft: 18,
    marginTop: 50,
    color: "gray"
  },
  newAcount: {
    fontSize: 20,
    marginLeft: 18,
    marginTop: 20
  },

  input: {
    marginLeft: 18,
    marginRight: 18,
    marginTop: 18,

  }
});

export default LoginScreen;