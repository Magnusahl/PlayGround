import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PlayGrounds from '../context/PlayGrounds';
import Playground from '../screens/PlayGround';



// const Item = ({ title, description, icon, babySwing, swing, slide }) => (
//     <View style={styles.item}>
//         <Text style={styles.title}>{title}</Text>
//         <Text style={styles.description}>{description}</Text>
//         {/* <Image style={styles.imageIcon}>{icon}</Image> */}
//         <View style={{ flexDirection: 'row' }}>
//             <Image style={styles.imageIcon} >{babySwing}</Image>
//             <Image style={styles.imageIcon} >{swing}</Image>
//             <Image style={styles.imageIcon} >{slide}</Image>
//         </View>

//     </View>
// );

function ListScreen({ navigation }) {
    // const renderItem = ({ item }) => (
    //     <TouchableOpacity onPress={() => navigation.navigate("PlayGround")} >
    //         <Item title={item.title}
    //             description={item.description}
    //         />
    //     </TouchableOpacity>

    // );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={PlayGrounds}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <Playground title={item.title}
                    desc={item.description}
                    image={item.image}
                    swing={item.swing}
                    babySwing={item.babySwing}
                    slide={item.slide}
                    sandbox={item.sandbox}
                    PlayGrounds={item} />}
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
        height: 170,
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

    }
});

export default ListScreen;