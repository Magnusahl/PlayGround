import React from 'react';
import { useState, useContext } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { setIsLoggedIn, logIn } = useContext(AuthContext);

    const submit = () => {
        // setIsLoggedIn(true);
        console.log('submitting log in');
        logIn(email, password);
    };


    return (
        <View style={styles.container}>
            <Text style={styles.loginText}>
                Login
      </Text>
            <View style={{ width: '50%' }}>
                <Text style={styles.loginText}>Email</Text>
                <TextInput
                    placeholder="Enter email"
                    value={email}
                    keyboardType="email-address"
                    onChangeText={setEmail}
                    style={styles.inputStyles
                    }
                />
                <Text style={styles.loginText}>Password</Text>
                <TextInput
                    placeholder="Enter password"
                    value={password}
                    secureTextEntry={"true"}
                    onChangeText={setPassword}
                    style={styles.inputStyles}
                />
                <Button title="Submit" onPress={submit} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
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
