import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { ListItem } from './components/ListItem';

const ARTICLES = [
  {
    urlToImage: 'https://picsum.photos/200',
    title:
      'React Native は、Facebookが開発したクロスプラットフォームアプリ開発用フレームワークです。 ReactNative でアプリを作ることで、クロスプラットフォーム( iOS / Androidどちらでも動く)アプリを作ることができます。',
    author: 'Techニュース',
  },
  {
    urlToImage: 'https://picsum.photos/201',
    title:
      'React Native Japan コミュニティは、日本でのReact Nativeの普及のため、活動を行っているコミュニティです。',
    author: 'React Native Japan',
  },
  {
    urlToImage: 'https://picsum.photos/203',
    title:
      'JavaScriptはプロトタイプベースのオブジェクト指向スクリプト言語であるが、クラスなどのクラスベースに見られる機能も取り込んでいます。',
    author: 'JavaScriptFan',
  },
];

export default function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles(ARTICLES);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            subTitle={item.author}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
