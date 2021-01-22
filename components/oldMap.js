import React, { useState } from 'react'
import { Text, StyleSheet, Dimensions, Image, View, Button, Alert } from 'react-native'
import { TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import MapView from 'react-native-maps'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

const response = [
    {
        id: '1',
        coordinates: {
            latitude: 59.236804552659535,
            longitude: 17.970016946407142,
        },
        title: 'Blå parken',
        description: 'Gungor och rutshikana',
        icon: require('../assets/playgroundTower.png')
    },
    {
        id: '2',
        coordinates: {
            latitude: 59.239394683986454,
            longitude: 17.973204955010072,
        },
        title: 'Båt parken',
        description: 'Gungor & rutshikana',
        icon: require('../assets/playgroundSwing.png')
    }
]



const Map = () => {
    // const [spot, setSpot] = useState(null)
    // const [visible, setVisible] = useState(false)

    // const onLongPressButton = () =>
    //     alert('You long-pressed the button!')


    const createAlert = () =>
        Alert.alert(
            "Alert Title",
            "My message",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel pressed"),
                    style: "cancel"
                },
                {
                    text: "OK", onPress: () => console.log("OK pressed")
                }
            ],
            { cancelable: false }
        )

    return (


        <MapView
            style={styles.map}
            loadingEnabled={true}
            region={{
                latitude: 59.23824599171569,
                longitude: 17.969888176703552,
                latitudeDelta: 0.003,
                longitudeDelta: 0.003
            }}
        >
            {response.map(marker => (
                <MapView.Marker
                    key={marker.id}
                    identifier={marker.id}
                    coordinate={marker.coordinates}
                    title={marker.title}
                    description={marker.description}
                    showUserLocation={true}
                >
                    <Image source={marker.icon} style={{ height: 32, width: 32 }} />
                </MapView.Marker>
            ))}
        </MapView>


    )
}

const styles = StyleSheet.create({
    map: {
        height
    },
    card: {
        backgroundColor: '#fff',
        height: 90,
        width: width - 20,
        position: 'absolute',
        overflow: 'hidden',
        margin: 10,
        bottom: 50,
        shadowRadius: 20,
        borderRadius: 8,
        padding: 10,
        elevation: 20
    },
    image: {
        height: 0,
        width: 100,
    },
    description: {
        position: 'absolute',
        paddingLeft: width / 2,
        paddingTop: 10,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    descriptionDetail: {
        position: 'absolute',
        paddingLeft: 120,
        paddingTop: 35,
    },
    descriptionPlaygroundName: {
        position: 'absolute',
        paddingLeft: 120,
        paddingTop: 55,
    },
})

export default Map