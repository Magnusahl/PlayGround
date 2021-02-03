import React from 'react';
import { useState, useContext } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AuthContext } from '../context/AuthContext';

export default function LoginScreen({ navigation: { goBack } }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { setIsLoggedIn, logIn } = useContext(AuthContext);

    const login = () => {
        // setIsLoggedIn(true);
        console.log('submitting log in');
        logIn(email, password);
    };


    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>
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
                    secureTextEntry={true}
                    onChangeText={setPassword}
                    style={styles.inputStyles}
                />
                <View style={styles.buttons}>
                    <TouchableOpacity
                        style={styles.loginButton}
                        title="Login"
                        onPress={login} >
                        <Text>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.backButton}
                        title="Go back"
                        onPress={() => goBack()}>
                        <Text>Go back</Text>
                    </TouchableOpacity>
                </View>

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
    titleText: {
        top: -85,
        fontSize: 75,
        color: 'blue'
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
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    loginButton: {
        marginTop: 50,
        width: 95,
        height: 50,
        backgroundColor: 'green',
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
    loginText: {
        marginTop: 10,
        color: "blue",
        fontSize: 35,
        fontWeight: "bold"
    }
});
