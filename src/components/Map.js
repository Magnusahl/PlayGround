import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { Dimensions } from 'react-native'
import MapView from 'react-native-maps'

const height = Dimensions.get('window').height

const Map = () => {
    return (
        <MapView
            style={styles.map}
            loadingEnabled={true}
            region={{
                latitude: 59.23824599171569,
                longitude: 17.969888176703552,
                latitudeDelta: 0.00345,
                longitudeDelta: 0.0121
            }}
        >
            <MapView.Marker
                coordinate={{
                    latitude: 59.236804552659535,
                    longitude: 17.970016946407142,
                }}
                title={"Blå Lekplats"}
                description={"Finns tre gungor och två rutschkanor"}

            />

            <MapView.Marker
                coordinate={{
                    latitude: 59.239394683986454,
                    longitude: 17.973204955010072,
                }}
                title={"Båtpark Lekplats"}
                description={"Det finns gungor och rutschikana"}

            />



        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        height
    }
})

export default Map