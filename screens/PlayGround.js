import React from 'react';
import { StyleSheet, Text, Button, View, Image } from 'react-native';



const PlayGround = (props) => {

    return (
        <View style={styles.container}>

            <Image style={styles.image} source={require('../assets/icon.png')} ></Image>
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
        height: 150
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

export default PlayGround;