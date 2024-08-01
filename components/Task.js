import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";
import { mdiChevronDownBox } from "@mdi/js";

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.flechaAbajo}>
        <Svg width={24} height={24} viewBox="0 0 24 24">
          <Path d={mdiChevronDownBox} fill={'#6A6A6A'}  />
        </Svg>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#D9D9D9',
    padding: 13,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 15,
    height: 15,
    backgroundColor: '#fD9D9D9',
    opacity: 10,
    borderWidth: 1,
    borderColor: '#000000',
    marginRight: 10,
  },
  itemText: {
    maxWidth: '80%',
  },
  flechaAbajo: {
    width: 21.88, // Ajusta el tamaño según sea necesario
    height: 21.88, // Ajusta el tamaño según sea necesario
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Task;
