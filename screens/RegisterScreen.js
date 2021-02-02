import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import firebase from 'firebase';
import 'firebase/firestore';

export class RegisterScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            name: ''
        }
        this.register = this.register.bind(this)
    }

    register() {
        const { email, password, name } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
                firebase.firestore().collection("users")
                    .doc(firebase.auth().currentUser.uid)
                    .set({
                        name,
                        email
                    })
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.loginText}>
                    Register
          </Text>
                <View style={{ width: '50%' }}>

                    <Text style={styles.loginText}>Name</Text>
                    <TextInput
                        placeholder="Enter your name"
                        keyboardType="default"
                        onChangeText={(name) => this.setState({ name })}
                        style={styles.inputStyles
                        }
                    />

                    <Text style={styles.loginText}>Email</Text>
                    <TextInput
                        placeholder="Enter email"
                        keyboardType="email-address"
                        onChangeText={(email) => this.setState({ email })}
                        style={styles.inputStyles
                        }
                    />
                    <Text style={styles.loginText}>Password</Text>
                    <TextInput
                        placeholder="Enter password"
                        secureTextEntry={true}
                        onChangeText={(password) => this.setState({ password })}
                        style={styles.inputStyles}
                    />
                    <Button title="Register" onPress={() => this.register()} />
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
    inputStyles: {
        color: 'black',
        marginBottom: 10,
        left: -15,
        width: 245,
        height: 50,
        borderRadius: 20,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        marginHorizontal: 10,
    },
    validationErrorText: {
        marginTop: 10,
        color: "red",
        fontSize: 18,
    },
    loginButton: {
        marginTop: 10,
        width: 95,
        height: 50,
        backgroundColor: 'orange',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    loginButtonText: {
        fontSize: 50,
        color: 'blue'
    },
    loginText: {
        marginTop: 10,
        color: "blue",
        fontSize: 35,
        fontWeight: "bold"
    }
});

export default RegisterScreen;