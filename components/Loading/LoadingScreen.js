import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, TextInput } from 'react-native-paper';
import { ActivityIndicator,  StyleSheet, View } from 'react-native';

const LoadingScreen = () => {
  return (
    <View>
        <ActivityIndicator style={styles.loading}/>
    </View>
  );
}

const styles = StyleSheet.create({
  loading: {
    size: "large",
    color: "blue"
  },
});

export default LoadingScreen;