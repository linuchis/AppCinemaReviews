import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, Image, StyleSheet, KeyboardAvoidingView, Platform, TextInput, Touchable, TouchableOpacity } from 'react-native';
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
  writeTaskWrapper:{
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  input:{
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    boderColor: "#565656",
    borderWidth: 1,
    width: 250,
  },

  addWrapper:{
    width: 60,
    height: 60,
    backgroundColor: '#ffffff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#565656',
    borderWidth: 2,
  },
  addText:{


  },
});

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [task, setTask] = useState();



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
        colors={['#080808','#775656']}
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
          </View>
        </View>


    {/*Componente de escribir tareas o  pelis*/}
    <KeyboardAvoidingView
    behavior={Platform.OS === "android" ? "padding" : "height"}
    style={styles.writeTaskWrapper}
    >
      <TextInput style={styles.input} placeholder={'Add movie'}/>

      <TouchableOpacity >
        <View style = {styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
    










        {/* {isLoading ? (
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
        )} */}
      </View>
    </View>
  );
};

export default App;
