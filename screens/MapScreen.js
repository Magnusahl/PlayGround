import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Dimensions, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListScreen from '../screens/ListScreen';

const Tab = createBottomTabNavigator();

const MapScreen = () => {
  return (

    <View style={styles.container}>
      <Text>
        Map Screen
    </Text>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default MapScreen;









// import MapView from 'react-native-maps';
// import * as Location from 'expo-location';

// const height = Dimensions.get('window').height
// const width = Dimensions.get('window').width

// const response = [
//   {
//     id: '1',
//     coordinates: {
//       latitude: 59.236804552659535,
//       longitude: 17.970016946407142,
//     },
//     title: 'Blå parken, nära Britas gränd',
//     description: 'Gungor och rutshikana',
//     icon: require('../assets/playgroundTower.png')
//   },
//   {
//     id: '2',
//     coordinates: {
//       latitude: 59.239394683986454,
//       longitude: 17.973204955010072,
//     },
//     title: 'Båt parken',
//     description: 'Gungor & rutshikana',
//     icon: require('../assets/playgroundSwing.png')
//   }
// ]

// function MapScreen() {

//   const [errorMsg, setErrorMsg] = useState(null);
//   const [mapRegion, setMapRegion] = useState(null);

//   useEffect(() => {
//     (async () => {
//       let { status } = await Location.requestPermissionsAsync();
//       if (status !== 'granted') {
//         setErrorMsg('Permission to access location was denied');
//         return;
//       }

//       let location = await Location.getCurrentPositionAsync({});
//       setMapRegion({
//         longitude: location.coords.longitude,
//         latitude: location.coords.latitude,
//         latitudeDelta: 0.0022,
//         longitudeDelta: 0.0021
//       })
//     })();
//   }, []);

//   return (
//     <MapView
//       style={styles.map}
//       loadingEnabled={true}
//       initialRegion={
//         mapRegion
//       }
//     >
//       <MapView.Marker coordinate={mapRegion}></MapView.Marker>
//       {response.map(marker => (
//         <MapView.Marker
//           key={marker.id}
//           identifier={marker.id}
//           coordinate={marker.coordinates}
//           title={marker.title}
//           description={marker.description}
//           showUserLocation={true}
//         >
//           <Image source={marker.icon} style={{ height: 32, width: 32 }} />
//         </MapView.Marker>
//       ))}
//     </MapView>

//   );
// }



// const styles = StyleSheet.create({
//   map: {
//     height
//   },
//   image: {
//     height: 0,
//     width: 100,
//   },
//   description: {
//     position: 'absolute',
//     paddingLeft: width / 2,
//     paddingTop: 10,
//     textAlign: 'center',
//     fontWeight: 'bold'
//   },
// })

// export default MapScreen();






