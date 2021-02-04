import React, { useEffect, useState } from 'react';
import { StyleSheet, Dimensions, View, Image } from 'react-native';
import PlayGrounds from '../context/PlayGrounds';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { fetchUser, fetchUserReviews } from '../redux/actions/index';

const { width, height } = Dimensions.get('screen');

export default function MapScreen() {
  // componentDidMount() {
  //   this.props.fetchUser();
  //   this.props.fetchUserReviews();
  // }

  // const { currentUser } = this.props;

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
      // onPress={() => console.log("Map")}
      >
        {/* <TextInput onPress={() => console.log("Search")} style={styles.overlay}>
          <Text style={styles.text}>Touchable Opacity</Text>
        </TextInput> */}

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
