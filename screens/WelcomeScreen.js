import React, { Component, useEffect, useState, useContext } from 'react';
import { Button, StyleSheet, Dimensions, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AuthContext } from '../context/AuthContext';


export default function WelcomeScreen({ navigation }) {
    const { setIsLoggedIn, signOut } = useContext(AuthContext);

    const submit = () => {
        // setIsLoggedIn(false);
        signOut();
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>
                Welcome to PlayGround!
                Come and Play!
            </Text>
            <TouchableOpacity style={styles.loginButton} title='Login' onPress={() => navigation.navigate("LoginScreen")} >
                <Text>Login</Text>
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
        marginTop: 120,
        width: 95,
        height: 50,
        backgroundColor: 'orange',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    titleText: {
        marginTop: -400,
        fontSize: 50,
        width: 295,
        color: 'orange',
    }
})



