import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AuthContext } from '../context/AuthContext';

function UserScreen() {
  const { signOut } = useContext(AuthContext);

  const submit = () => {
    signOut();
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/playgroundSwing.png')}
      />

      <TouchableOpacity onPress={submit} style={styles.overlay}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0391D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    bottom: 15,
    left: 280,
    backgroundColor: 'orange',
    height: 50,
    width: 125,
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    top: 10,
    bottom: 10,
    width: 130,
    height: 130,
  },
});
