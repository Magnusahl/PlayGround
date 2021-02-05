import React from 'react';
import { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AuthContext } from '../context/AuthContext';

export default function LoginScreen({ navigation: { goBack } }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { logIn } = useContext(AuthContext);

  const login = () => {
    logIn(email, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Login</Text>
      <View style={{ width: '50%' }}>
        <Text style={styles.loginText}>Email</Text>
        <TextInput
          placeholder="Enter email"
          value={email}
          autoCorrect={false}
          spellCheck={false}
          keyboardType="email-address"
          onChangeText={setEmail}
          style={styles.inputStyles}
        />
        <Text style={styles.loginText}>Password</Text>
        <TextInput
          placeholder="Enter password"
          value={password}
          autoCorrect={false}
          spellCheck={false}
          secureTextEntry={true}
          onChangeText={setPassword}
          style={styles.inputStyles}
        />

        <TouchableOpacity
          style={styles.loginButton}
          title="Login"
          onPress={login}
        >
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.backButton}
          title="Go back"
          onPress={() => goBack()}
        >
          <Text>Go back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D8E0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    top: -45,
    fontSize: 75,
    color: '#22E08C',
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
  loginButton: {
    left: 45,
    marginTop: 40,
    marginBottom: 25,
    width: 125,
    height: 50,
    backgroundColor: '#22E08C',
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
  loginText: {
    marginTop: 10,
    color: '#1252E0',
    fontSize: 35,
    fontWeight: 'bold',
  },
});
