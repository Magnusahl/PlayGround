import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';
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
    },
    {
        id: '3',
        coordinates: {
            latitude: 59.239394683986454,
            longitude: 17.973204955010072,
        },
        title: 'Vistabergs parken',
        description: 'Gungor',
        icon: require('../assets/playgroundSwing.png')
    },
    {
        id: '4',
        coordinates: {
            latitude: 59.239394683986454,
            longitude: 17.973204955010072,
        },
        title: 'Glömsta skogen',
        description: 'Rutshikana',
        icon: require('../assets/playgroundSwing.png')
    }
]

const Item = ({ title, description, icon }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Image style={styles.imageIcon}>{icon}</Image>
    </View>
);

function ListScreen() {
    const renderItem = ({ item }) => (
        <TouchableOpacity  >
            <Item title={item.title} description={item.description} />
        </TouchableOpacity>

    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={response}
                keyExtractor={item => item.id}
                renderItem={renderItem}
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
        backgroundColor: '#fff564',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        height: 150,
        flexDirection: 'column'

    },
    title: {
        fontSize: 32,
    },
    description: {
        fontSize: 15,

    },
    imageIcon: {
        height: 32,
        width: 32
    }
});

export default ListScreen;