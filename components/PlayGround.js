import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Spacer from './Spacer';

export default function PlayGround(props) {
  return (
    <Spacer>
      <View style={styles.container}>
        <Image style={styles.image} source={props.image} />
        <Text style={styles.textTitle}>{props.title}</Text>
        <Text style={styles.textDesc}>{props.desc}</Text>
        <Text style={styles.textCity}>{props.city}</Text>
        <View style={styles.icon}>
          <Image style={styles.imageSwing} source={props.swing} />
          <Image style={styles.imageSwing} source={props.babySwing} />
          <Image style={styles.imageSwing} source={props.slide} />
          <Image style={styles.imageSwing} source={props.sandbox} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            justifyContent: 'space-between',
          }}
        >
          <TouchableOpacity
            style={styles.buttonReview}
            onPress={props.showModal}
          >
            <Text>Review</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonSeeOnMap}
            onPress={props.mapScreen}
          >
            <Text>Map</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Spacer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 150,
    justifyContent: 'center',
  },
  imageSwing: {
    width: 48,
    height: 48,
  },
  icon: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 2,
  },
  textDesc: {
    marginBottom: 5,
  },
  textCity: {
    fontWeight: 'bold',
    marginBottom: 2,
  },
  buttonReview: {
    borderRadius: 80,
    width: 125,
    height: 50,
    backgroundColor: '#E09B00',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonSeeOnMap: {
    borderRadius: 80,
    width: 125,
    height: 50,
    backgroundColor: '#21E098',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
