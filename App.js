import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, Image, StyleSheet } from 'react-native';
import Task from './components/Task';
import { LinearGradient } from 'expo-linear-gradient';
import { getMovies } from './services/MetacriticMovies';
// Calcular las posiciones de inicio y fin para un ángulo de -43 grados
const angle = 43 * (Math.PI / 180); // convertir grados a radianes
const start = { x: 0.5 - 0.5 * Math.cos(angle), y: 0.5 - 0.5 * Math.sin(angle) };
const end = { x: 0.5 + 0.5 * Math.cos(angle), y: 0.5 + 0.5 * Math.sin(angle) };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  tasksWrapper: {
    paddingTop: 10,
    paddingHorizontal: 14,
    
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#B5B5B5',
    alignItems: 'center',

  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
  background: {
    ...StyleSheet.absoluteFillObject, // Para hacer que el LinearGradient ocupe toda la pantalla
  },
});

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);



  useEffect(() => {
    const fetchData = async () => {
      const movies = await getMovies();
      setData(movies);
      setLoading(false);
    };
    
    fetchData();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={['#775656','#080808']}
        style={styles.background}
        start={start}
        end={end}

      />
      <View style={styles.container}>
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Your pending movies</Text>
          <View style={styles.items}>
            {/* las tareas van acá*/}
            <Task text={'Task 1'} />
            <Task text={'Task 2'} />
            <Task text={'Task 3'} />
          </View>
        </View>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View>
                <Text>
                  {item.title}, {item.premiereYear ? item.premiereYear : 'N/A'} {item.genres[0].name}
                </Text>
                <Image
                  style={styles.tinyLogo}
                  source={{
                    uri: `https://www.metacritic.com/a/img/${item.image.bucketType}${item.image.bucketPath}`,
                  }}
                />
              </View>
            )}
          />
        )}
      </View>
    </View>
  );
};

export default App;
