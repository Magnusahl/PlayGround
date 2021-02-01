import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { AuthContext } from '../context/AuthContext';

export default function UserScreen() {

    const { setIsLoggedIn, signOut } = useContext(AuthContext);

    const submit = () => {
        // setIsLoggedIn(false);
        signOut();
    };

    return (
        <View style={styles.container} >
            <Text>Hi User, see your favorite playground!</Text>
            <TouchableOpacity onPress={submit} style={styles.overlay}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    overlay: {
        position: 'absolute',
        bottom: 15,
        left: 305,
        backgroundColor: 'orange',
        height: 40,
        width: 100,
        borderRadius: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

