import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import axios from 'axios';
import { ListItem } from './components/ListItem';

export default function App() {
  const [articles, setArticles] = useState([]);

  const fetch = async () => {
    const response = await axios.get(
      'https://asia-northeast1-news-app-udemy.cloudfunctions.net/dummy_news'
    );
    setArticles(response.data.articles);
  };

  useEffect(() => {
    fetch();
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
