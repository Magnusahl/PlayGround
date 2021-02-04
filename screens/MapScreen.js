import React, { useEffect, useState } from 'react';
import { StyleSheet, Dimensions, View, Image } from 'react-native';
import PlayGrounds from '../context/PlayGrounds';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';

const { width, height } = Dimensions.get('screen');

export default function MapScreen() {
  const [errorMsg, setErrorMsg] = useState(null);
  const [mapRegion, setMapRegion] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setMapRegion({
        longitude: location.coords.longitude,
        latitude: location.coords.latitude,
        latitudeDelta: 0.0422,
        longitudeDelta: 0.0921,
      });
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapView}
        loadingEnabled={true}
        initialRegion={mapRegion}
      >
        <MapView.Marker coordinate={mapRegion} />
        {PlayGrounds.map((marker) => (
          <MapView.Marker
            key={marker.id}
            coordinate={marker.coordinates}
            title={marker.title}
            // description={marker.description}
            // showUserLocation={true}
            onPress={() => console.log('Pressed')}
          >
            <Image source={marker.icon} style={{ height: 32, width: 32 }} />
          </MapView.Marker>
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width,
    height,
  },
  mapView: {
    width,
    height,
  },
});
