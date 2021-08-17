import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Button, TextInput } from 'react-native-paper';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

const SignUpScreen = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const sendCred = () => {
    fetch("http://192.168.2.110:5000/signup", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body:JSON.stringify({
        "email": email,
        "password": password
      })
    })
    .then(res => res.json())
    .then(data=> {
      console.log(data);
    })
  }

  return (
    <>
      <KeyboardAvoidingView behavior="padding">
        <StatusBar backgroundColor="gray" barStyle="light-content" />
        <Text style={styles.title}>Welcome to</Text>
        <Text style={styles.logo}>Nsys App</Text>
        <View style={styles.line}></View>
        <Text style={styles.newAcount}>Create new account</Text>

        <TextInput
          style={styles.input}
          label="Name"
          mode="outlined"
          theme={{ colors: { primary: "blue" } }}
        />

        <TextInput
          style={styles.input}
          label="Telephone Number"
          mode="outlined"
          theme={{ colors: { primary: "blue" } }}
        />
        <TextInput
          style={styles.input}
          label="Email"
          value={email}
          mode="outlined"
          theme={{ colors: { primary: "blue" } }}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          value={password}
          label="Password"
          secureTextEntry={true}
          mode="outlined"
          theme={{ colors: { primary: "blue" } }}
          onChangeText={(text) => setPassword(text)}
        />

        <Button
          style={styles.input}
          mode="contained"
          onPress={() => sendCred()}>
          Регистрация
        </Button>
        <TouchableOpacity >
          <Text 
            style={styles.input}
            onPress={() => props.navigation.navigate("login")}
          >
            Имате вече регистрация ?
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

export default SignUpScreen;