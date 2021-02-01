import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, Modal, StyleSheet, Text, StatusBar, Image, ActivityIndicator } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import PlayGrounds from '../context/PlayGrounds';
import Playground from '../components/PlayGround';
import ReviewModal from '../components/ReviewModal';

export default function ListScreen({ navigation }) {

    const [loading, isLoading] = useState(null);
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
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

            {/* <Modal
                animationType='slide'
                visible={modalVisible}>
                <ReviewModal />
            </Modal> */}

            <TextInput
                placeholder='Search'
                placeholderTextColor='black'
                onChangeText={(text) => searchFilterFunction(text)}
            />

            <FlatList
                data={filteredDataSource}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                    <Playground title={item.title}
                        desc={item.description}
                        image={item.image}
                        swing={item.swing}
                        babySwing={item.babySwing}
                        slide={item.slide}
                        sandbox={item.sandbox}
                        PlayGrounds={item}
                        nextPage={() => navigation.navigate("MapScreen")}
                        showModal={() => {
                            setModalVisible(true);
                        }} />} />
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

});









{/* <View style={{ flex: 1, backgroundColor: 'white' }} >
                {useState(isLoading ? (
                    <View style={{
                        ...StyleSheet.absoluteFill,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }} >
                        <ActivityIndicator size='large' color='black' />
                    </View>
                ) : null)}

            </View> */}

// ListEmptyComponent={() => (
//     <View
//         style={{
//             flex: 1,
//             alignItems: 'center',
//             justifyContent: 'center',
//             marginTop: 50
//         }}
//     >
//         <Text style={{ color: '#bad555' }}>No PlayGrounds Found</Text>
//     </View>

// )}
