import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>
        Welcome to PlayGround! Come and Play!
      </Text>
      <Image
        style={styles.image}
        source={require('../assets/playgroundSwing.png')}
      />

      <TouchableOpacity
        style={styles.loginButton}
        title="Login"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        <Text>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.registerButton}
        title="Register"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1252E0',
  },
  loginButton: {
    marginTop: 80,
    marginBottom: 25,
    width: 125,
    height: 50,
    backgroundColor: '#E09B00',
    borderRadius: 20,
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
  registerButton: {
    marginTop: 20,
    width: 125,
    height: 50,
    backgroundColor: '#E09B00',
    borderRadius: 20,
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
  titleText: {
    top: -45,
    fontSize: 50,
    width: 295,
    color: '#E09B00',
    textAlign: 'center',
  },
  image: {
    top: 10,
    bottom: 10,
    width: 130,
    height: 130,
  },
});
