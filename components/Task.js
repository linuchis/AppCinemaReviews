import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


const Task = (props) => {


    return(
        <View style = {styles.item}>
            <View style = {styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style = {styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>    
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#D9D9D9',
        padding: 13,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom:8,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
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
    itemText: {},
    circular: {},


});

export default Task; 