import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ListItem } from './components/ListItem';

export default function App() {
  return (
    <View style={styles.container}>
      <ListItem />
      <ListItem />
      <ListItem />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
