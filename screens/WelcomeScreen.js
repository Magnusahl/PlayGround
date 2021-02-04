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
    backgroundColor: 'blue',
  },
  loginButton: {
    marginTop: 60,
    width: 95,
    height: 50,
    backgroundColor: 'orange',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerButton: {
    marginTop: 20,
    width: 95,
    height: 50,
    backgroundColor: 'orange',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    marginTop: -200,
    fontSize: 50,
    width: 295,
    color: 'orange',
    textAlign: 'center',
  },
  image: {
    top: 10,
    bottom: 10,
    width: 100,
    height: 100,
  },
});
