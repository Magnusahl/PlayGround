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
          <View style={styles.buttons}>
            <TouchableOpacity
              style={styles.backButton}
              title="Go back"
              onPress={() => this.props.navigation.goBack()}
            >
              <Text>Go back</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.registerButton}
              title="Register"
              onPress={() => this.register()}
            >
              <Text>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    top: -85,
    fontSize: 75,
    color: 'orange',
  },
  inputStyles: {
    color: 'black',
    marginBottom: 10,
    left: -15,
    width: 245,
    height: 50,
    borderRadius: 20,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  registerButton: {
    marginTop: 50,
    width: 95,
    height: 50,
    backgroundColor: 'orange',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    marginTop: 50,
    width: 95,
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  loginButtonText: {
    fontSize: 50,
    color: 'blue',
  },
  loginText: {
    marginTop: 10,
    color: 'blue',
    fontSize: 35,
    fontWeight: 'bold',
  },
});

export default RegisterScreen;
