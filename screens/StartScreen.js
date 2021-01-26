import React, { Component, useEffect, useState } from 'react';
import { Button, StyleSheet, Dimensions, Text, View, Image } from 'react-native';

const StartScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>
                Hi and Welcome!
            </Text>
            <Button title="LogIn" onPress={() => navigation.navigate("LogIn")}  ></Button>
            {/* <Button title="MapScreen" onPress={() => navigation.navigate("MapScreen")}  ></Button> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default StartScreen;


