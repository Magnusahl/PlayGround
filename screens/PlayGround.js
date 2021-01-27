import React from 'react';
import { StyleSheet, Text, Button, View, Image } from 'react-native';
import playgrounds from '../context/PlayGrounds';


const PlayGround = (props) => {

    const playgrounds = props.playgrounds

    return (
        <View style={styles.container}>
            <Text>{playgrounds.title}</Text>
            <Image style={styles.image} source={require('../assets/icon.png')} ></Image>

            <Text>{playgrounds.description}</Text>
            <View style={styles.icon}>
                <Image style={styles.imageSwing} source={require('../assets/swing.png')} ></Image>
                <Image style={styles.imageSwing} source={require('../assets/babySwing.png')} ></Image>
                <Image style={styles.imageSwing} source={require('../assets/slide.png')} ></Image>
                <Image style={styles.imageSwing} source={require('../assets/sandbox.png')} ></Image>
            </View>
        </View>
    )
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f345',
        alignItems: 'center',
        flexDirection: 'column'
    },
    image: {
        width: 250,
        height: 250
    },
    imageSwing: {
        width: 32,
        height: 32
    },
    icon: {
        flexDirection: 'row'
    }
})

export default PlayGround;