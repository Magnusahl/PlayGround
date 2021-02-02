import React, { Component, useEffect, useState, useContext } from 'react';
import { Button, StyleSheet, Dimensions, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AuthContext } from '../context/AuthContext';


export default function WelcomeScreen({ navigation }) {
    const { setIsLoggedIn, signOut } = useContext(AuthContext);


    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>
                Welcome to PlayGround!
                Come and Play!
            </Text>

            <TouchableOpacity style={styles.loginButton}
                title='Login'
                onPress={() => navigation.navigate("LoginScreen")} >
                <Text>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton}
                title='Register'
                onPress={() => navigation.navigate("RegisterScreen")} >
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
        marginTop: 50,
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
    }
})



