import React from 'react'
import { Text, StyleSheet, Dimensions, Image } from 'react-native'
import MapView from 'react-native-maps'

const height = Dimensions.get('window').height

const response = [
    {
        id: '1',
        coordinates: {
            latitude: 59.236804552659535,
            longitude: 17.970016946407142,
        },
        title: 'SomeT',
        description: 'SomeA',
        icon: require('../../assets/playgroundTower.png')
    },
    {
        id: '2',
        coordinates: {
            latitude: 59.239394683986454,
            longitude: 17.973204955010072,
        },
        title: 'SomeB',
        description: 'SomeC',
        icon: require('../../assets/playgroundSwing.png')
    }
]

const Map = () => {
    return (
        <MapView
            style={styles.map}
            loadingEnabled={true}
            region={{
                latitude: 59.23824599171569,
                longitude: 17.969888176703552,
                latitudeDelta: 0.1012,
                longitudeDelta: 1
            }}
        >
            {response.map(marker => (
                <MapView.Marker
                    key={marker.id}
                    coordinate={marker.coordinates}
                    title={marker.title}
                    description={marker.description}
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
    }
})

export default Map