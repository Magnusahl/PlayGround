import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function ReviewModal({ modalVisible }) {

    return (
        <View style={styles.container}>
            <Text>Write a review of this playground</Text>
            <TextInput
                placeholder='Write here...'
            ></TextInput>
            <Button
                title='save review'
                onPress={() => (!modalVisible)}
            ></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

});