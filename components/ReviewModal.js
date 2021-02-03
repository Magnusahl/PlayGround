import React from 'react';
import { StyleSheet, View, Text, Button, Modal } from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';

export default function ReviewModal({ modalVisible, setModalVisible }) {

    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={modalVisible}>
            <View style={styles.container}>
                <Text>Write a review of this playground</Text>
                <TextInput
                    placeholder='Write here...'
                ></TextInput>
                <Button
                    title='save review'
                    onPress={() => { setModalVisible(false) }}
                ></Button>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        backgroundColor: "yellow",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },

});