import React, { useEffect, useState } from 'react';
import { StyleSheet, Dimensions, View, Image } from 'react-native';
import PlayGrounds from '../context/PlayGrounds';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { fetchUser, fetchUserReviews } from '../redux/actions/index';

const { width, height } = Dimensions.get("screen");

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
        longitudeDelta: 0.0921
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
        {/* <TextInput onPress={() => console.log("Search")} style={styles.overlay}>
          <Text style={styles.text}>Touchable Opacity</Text>
        </TextInput> */}

        <MapView.Marker coordinate={mapRegion}></MapView.Marker>
        {PlayGrounds.map(marker => (
          <MapView.Marker
            key={marker.id}
            coordinate={marker.coordinates}
            title={marker.title}
            // description={marker.description}
            // showUserLocation={true}
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

// const mapStateToProps = (store) => ({
//   currentUser: store.userState.currentUser
// })
// const mapDispatchProps = (dispatch) => bindActionCreators({ fetchUser, fetchUserReviews }, dispatch);

// export default connect(null, mapDispatchProps)(MapScreen);







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
  //   },
  //   {
  //     id: '3',
  //     coordinates: {
  //       latitude: 59.22861938479551,
  //       longitude: 17.98421612997896,
  //     },
  //     title: 'Spindel parken',
  //     description: 'Swings and slides',
  //     icon: require('../assets/spider.png'),
  //   },
  //   {
  //     id: '4',
  //     coordinates: {
  //       latitude: 59.24084650719094,
  //       longitude: 17.98708645135727,
  //     },
  //     title: 'Rådsparken',
  //     description: 'Swings',
  //     icon: require('../assets/pawprint.png'),
  //   }
  // ]


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






