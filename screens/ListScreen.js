import React, { useState } from 'react';
import { SafeAreaView, FlatList, StyleSheet, StatusBar, Image, ActivityIndicator } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import PlayGrounds from '../context/PlayGrounds';
import Playground from '../components/PlayGround';
import ReviewModal from '../components/ReviewModal';

export default function ListScreen({ navigation }) {

    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState(PlayGrounds);
    const [masterDataSource, setMasterDataSource] = useState(PlayGrounds);

    const [modalVisible, setModalVisible] = useState(false);

    const searchFilterFunction = (text) => {
        if (text) {
            const newData = masterDataSource.filter(function (item) {
                const itemData = item.title
                    ? item.title.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredDataSource(newData);
            setSearch(text);
        } else {
            setFilteredDataSource(masterDataSource);
            setSearch(text);
        }
    }

    return (
        <SafeAreaView style={styles.container}>

            <ReviewModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />

            <TextInput
                style={styles.inputStyles}
                placeholder='Search Playground'
                placeholderTextColor='black'
                onChangeText={(text) => searchFilterFunction(text)}
            />

            <FlatList
                data={filteredDataSource}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                    <Playground title={item.title}
                        desc={item.description}
                        city={item.city}
                        image={item.image}
                        swing={item.swing}
                        babySwing={item.babySwing}
                        slide={item.slide}
                        sandbox={item.sandbox}
                        PlayGrounds={item}
                        nextPage={() => navigation.navigate("MapScreen")}
                        showModal={() => { setModalVisible(true); }}
                    />} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#fff664',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        height: 190,
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
        width: 32,
        backgroundColor: 'blue',
    },
    inputStyles: {
        color: 'black',
        width: 420,
        height: 45,
        backgroundColor: 'gray',
        textAlign: 'center'
    },
});