import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import firebase from 'firebase';
import 'firebase/firestore';

export class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
    };
    this.register = this.register.bind(this);
  }

  register() {
    const { email, password, name } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        firebase
          .firestore()
          .collection('users')
          .doc(firebase.auth().currentUser.uid)
          .set({
            name,
            email,
          });
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Register</Text>
        <View style={{ width: '50%' }}>
          <Text style={styles.loginText}>Name</Text>
          <TextInput
            placeholder="Enter your name"
            keyboardType="default"
            onChangeText={(name) => this.setState({ name })}
            style={styles.inputStyles}
          />

          <Text style={styles.loginText}>Email</Text>
          <TextInput
            placeholder="Enter email"
            keyboardType="email-address"
            onChangeText={(email) => this.setState({ email })}
            style={styles.inputStyles}
          />
          <Text style={styles.loginText}>Password</Text>
          <TextInput
            placeholder="Enter password"
            secureTextEntry={true}
            onChangeText={(password) => this.setState({ password })}
            style={styles.inputStyles}
          />
          <TouchableOpacity
            style={styles.registerButton}
            title="Register"
            onPress={() => this.register()}
          >
            <Text>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.backButton}
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          >
            <Text>Go back</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22E08C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    top: -45,
    fontSize: 75,
    color: '#E09B00',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputStyles: {
    color: 'black',
    marginBottom: 10,
    width: 245,
    height: 50,
    borderRadius: 20,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  registerButton: {
    marginTop: 40,
    marginBottom: 25,
    left: 45,
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
  backButton: {
    left: 45,
    width: 125,
    height: 50,
    backgroundColor: '#1252E0',
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
  loginButtonText: {
    fontSize: 50,
    color: '#1252E0',
  },
  loginText: {
    marginTop: 10,
    color: '#1252E0',
    fontSize: 35,
    fontWeight: 'bold',
  },
});

export default RegisterScreen;
