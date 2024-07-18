import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { getLatestGames } from './lib/metacritic';

export default function App() {

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  const [games, setGames] = useState([]);




  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {games.map((game) => (
        <View key ={games.slug} style = {styles.card}>
          <Image
          source={{ uri: games.image }}
          style={{
            width: 107,
            height:147,
            borderRadius: 10,
          }}
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#66f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
