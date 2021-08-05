import React from 'react';
import { StyleSheet, Text } from 'react-native';

const HomeScreen = () => {
  return (
    <>
        <Text style={styles.home}>
            Your Email is
        </Text>
    </>
  );
}

const styles = StyleSheet.create({
  home: {
    fontSize: 18,
  },
});

export default HomeScreen;