import React from 'react';
import { StyleSheet, Text, SafeAreaView, Image, View } from 'react-native';

export default function HomeScreen(props) {
  const { route } = props;
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: route.params.article.urlToImage }}
      />
      <View style={styles.textContainer}>
        <Text>{route.params.article.title}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  textContainer: {
    margin: 10,
  },
});
