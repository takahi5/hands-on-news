import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ListItem } from './components/ListItem';

export default function App() {
  return (
    <View style={styles.container}>
      <ListItem
        imageUrl="https://picsum.photos/200"
        title="React Native は、Facebookが開発したクロスプラットフォームアプリ開発用フレームワークです。 ReactNative でアプリを作ることで、クロスプラットフォーム( iOS / Androidどちらでも動く)アプリを作ることができます。"
        subTitle="Techニュース"
      />
      <ListItem
        imageUrl="https://picsum.photos/201"
        title="React Native Japan コミュニティは、日本でのReact Nativeの普及のため、活動を行っているコミュニティです。"
        subTitle="React Native Japan"
      />
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
