import React, { useState } from 'react';
import { SafeAreaView, FlatList, StyleSheet, StatusBar } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import PlayGrounds from '../context/PlayGrounds';
import Playground from '../components/PlayGround';
import ReviewModal from '../components/ReviewModal';
import Reviews from '../context/Reviews';

export default function ListScreen({ navigation }) {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState(PlayGrounds);
  const [masterDataSource, setMasterDataSource] = useState(PlayGrounds);
  const [selectedPlayground, setSelectedPlayground] = useState();

  const [modalVisible, setModalVisible] = useState(false);

  //The function for the playground screen
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
  };

  return (
    <SafeAreaView style={styles.container}>
      <Reviews>
        <ReviewModal
          selectedPlayground={selectedPlayground}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </Reviews>

      <TextInput
        style={styles.inputStyles}
        placeholder="Search Playground"
        placeholderTextColor="black"
        onChangeText={(text) => searchFilterFunction(text)}
      />

      <FlatList
        data={filteredDataSource}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Playground
            title={item.title}
            desc={item.description}
            city={item.city}
            image={item.image}
            swing={item.swing}
            babySwing={item.babySwing}
            slide={item.slide}
            sandbox={item.sandbox}
            PlayGrounds={item}
            mapScreen={() => navigation.navigate('MapScreen')}
            showModal={() => {
              setModalVisible(true);
              setSelectedPlayground(item.id);
            }}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#D3D8E0',
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
    backgroundColor: '#07C2E0',
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
