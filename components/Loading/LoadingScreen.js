import React from 'react';
import { ActivityIndicator,  StyleSheet, View } from 'react-native';

const LoadingScreen = () => {
  return (
    <View style={styles.loading}>
        <ActivityIndicator size="large" color="blue" />
    </View>
  );
}

const styles = StyleSheet.create({
    loading:{
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }
  })

export default LoadingScreen;