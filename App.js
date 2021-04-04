import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.leftContainer}>
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: 'https://picsum.photos/200' }}
          />
        </View>

        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>
            React Native は、Facebook
            が開発したクロスプラットフォームアプリ開発用フレームワークです。
            React Native でアプリを作ることで、クロスプラットフォーム( iOS /
            Android どちらでも動く)アプリを作ることができます。
          </Text>
          <Text style={styles.subTitle}>Techニュース</Text>
        </View>
      </View>
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
  itemContainer: {
    width: '100%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#ccc',
    marginVertical: 5,
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    flexDirection: 'column',
    padding: 10,
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
  },
  subTitle: {
    fontSize: 12,
    color: '#555',
  },
});
