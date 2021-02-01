import React from 'react';
import { StyleSheet, Text, Button, View, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Spacer from './Spacer';

export default function PlayGround(props) {

    return (

        < Spacer >
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
                <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-between' }}>
                    <TouchableOpacity style={styles.buttonReview}
                        onPress={() => console.log("Fuck off")}>
                        <Text>Review</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonSeeOnMap}
                        onPress={props.nextPage}
                    >
                        <Text>See on map</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </Spacer >
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
    },
    buttonReview: {
        width: 95,
        height: 50,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonSeeOnMap: {
        width: 95,
        height: 50,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputStyles: {
        color: 'black',
        marginBottom: 10,
        left: -15,
        width: 245,
        height: 50,
        borderRadius: 20,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        marginHorizontal: 10,
    },
})
