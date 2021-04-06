import React from 'react';
import { StyleSheet, Text, SafeAreaView, Image } from 'react-native';

export default function DetailScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Detail Screen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
