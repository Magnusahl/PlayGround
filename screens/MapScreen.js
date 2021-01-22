import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Dimensions, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MapView from 'react-native-maps';
import ListScreen from './ListScreen';
import * as Location from 'expo-location';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

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

function MapScreen() {

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
    <MapView
      style={styles.map}
      loadingEnabled={true}
      initialRegion={
        mapRegion
      }
    >
      <MapView.Marker coordinate={mapRegion}></MapView.Marker>
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

  );
}

function AddScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Add Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function Home() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }} >
        <Tab.Screen name="Home" component={MapScreen} />

        <Tab.Screen name="List" component={ListScreen} />

        <Tab.Screen name="Add" component={AddScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  map: {
    height
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
})

export default Home;









// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { createAppContainer, createSwitchNavigator } from 'react-navigation'
// import { createBottomTabNavigator } from 'react-navigation-tabs'
// import MapScreen from './MapScreen'
// import MapListScreen from './screens/MapListScreen'
// import { setNavigator } from './NavigationRef'




// // const switchNavigator = createSwitchNavigator({
// //   mainFlow: createBottomTabNavigator({
// //     MapView: MapScreen,
// //     MapList: MapListScreen
// //   }, {
// //     tabBarOptions: {
// //       showLabel: false,
// //       activeTintColor: '#3D8836'
// //     }
// //   })
// // })

// const App = createAppContainer(switchNavigator)

// export default () => {
//   return (
//     <App
//       ref={navigator => {
//         setNavigator(navigator)
//       }}
//     />
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
