import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const response = [
    {
        id: '1',
        coordinates: {
            latitude: 59.236804552659535,
            longitude: 17.970016946407142,
        },
        title: 'Blå parken',
        description: 'Gungor och rutshikana',
        icon: require('../assets/playgroundTower.png')
    },
    {
        id: '2',
        coordinates: {
            latitude: 59.239394683986454,
            longitude: 17.973204955010072,
        },
        title: 'Båt parken',
        description: 'Gungor & rutshikana',
        icon: require('../assets/playgroundSwing.png')
    }
]

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

function ListSreen() {
    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={response}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});

export default ListSreen;