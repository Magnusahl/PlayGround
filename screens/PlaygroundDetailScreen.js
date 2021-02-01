import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, ActivityIndicator } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default function PlaygroundDetailScreen(props) {

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={props.image} ></Image>
            <Text style={styles.textTitle}>{props.title}</Text>
            <Text style={styles.textDesc}>{props.desc}</Text>
            <View style={styles.icon}>
                <Image style={styles.imageSwing} source={props.swing} ></Image>
                <Image style={styles.imageSwing} source={props.babySwing} ></Image>
                <Image style={styles.imageSwing} source={props.slide} ></Image>
                <Image style={styles.imageSwing} source={props.sandbox} ></Image>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        padding: 20
    },
    image: {
        width: '100%',
        height: 150,
        justifyContent: 'center'
    },
    imageSwing: {
        width: 48,
        height: 48
    },
    icon: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    textTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 10,
        marginBottom: 2
    },
    textDesc: {
        marginBottom: 5
    }

})