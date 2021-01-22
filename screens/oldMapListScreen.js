import React from 'react'
import { SafeAreaView } from 'react-navigation'
import { Image, View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { ListItem } from 'react-native-elements'

const response = [
    {
        id: '1',
        title: 'Blå Parkens Lekplats',
        image: require('../assets/playgroundTower.png')
    },
    {
        id: '2',
        title: 'Båts parkens Lekplats',
        image: require('../assets/playgroundSwing.png')
    }
]

const MapListScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container} forceInset={{ top: 'always' }}>
            <Text>Testar om man ser något</Text>
            <FlatList
                data={response}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('MapDetail', { _id: item.id, _title: item.title })
                            }>
                            <ListItem chevron
                                title={item.title}
                                leftAvatar={
                                    <Image source={item.image} />
                                }
                            />
                        </TouchableOpacity>
                    )
                }}
            />
        </SafeAreaView>
    )
}

MapListScreen.navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-list" color={tintColor} size={30} />
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 4,
        backgroundColor: 'yellow',
        padding: 30
    }
})

export default MapListScreen