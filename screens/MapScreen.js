import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Dimensions, Text, View, Image } from 'react-native';

import MapView, { Callout, CalloutSubview } from 'react-native-maps';
import * as Location from 'expo-location';

const { width, height } = Dimensions.get("screen");

const MapScreen = () => {

  const response = [
    {
      id: '1',
      coordinates: {
        latitude: 59.236804552659535,
        longitude: 17.970016946407142,
      },
      title: 'Blå parken, nära Britas gränd',
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
        latitudeDelta: 0.0022,
        longitudeDelta: 0.0021
      })
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapView}
        loadingEnabled={true}
        initialRegion={
          mapRegion
        }
      // onPress={() => console.log("Map")}
      >
        <MapView.Marker coordinate={mapRegion}></MapView.Marker>
        {response.map(marker => (
          <MapView.Marker
            key={marker.id}
            identifier={marker.id}
            coordinate={marker.coordinates}
            // title={marker.title}
            // description={marker.description}
            showUserLocation={true}
            onPress={() => console.log("Pressed")}
          >
            <Image source={marker.icon} style={{ height: 32, width: 32 }} />
          </MapView.Marker>
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width,
    height
  },
  mapView: {
    width,
    height
  },
})

export default MapScreen;




// const height = Dimensions.get('window').height
// const width = Dimensions.get('window').width

// const [errorMsg, setErrorMsg] = useState(null);
// const [mapRegion, setMapRegion] = useState(null);

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


// useEffect(() => {
//   (async () => {
//     let { status } = await Location.requestPermissionsAsync();
//     if (status !== 'granted') {
//       setErrorMsg('Permission to access location was denied');
//       return;
//     }

//     let location = await Location.getCurrentPositionAsync({});
//     setMapRegion({
//       longitude: location.coords.longitude,
//       latitude: location.coords.latitude,
//       latitudeDelta: 0.0022,
//       longitudeDelta: 0.0021
//     })
//   })();
// }, []);


// function MapScreen() {

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






