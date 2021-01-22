import React from 'react'
import { Text, StyleSheet, Dimensions } from 'react-native'
import Spacer from '../components/Spacer'
import { SafeAreaView } from 'react-navigation'
import { ScrollView } from 'react-native-gesture-handler'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height / 2

const MapDetailScreen = ({ navigation }) => {
    const _id = navigation.getParam('_id')
    const _title = navigation.getParam('_title')

    MapDetailScreen.navigationOptions = {
        title: _title
    }

    return (
        <SafeAreaView style={styles.container} forceInset={{ top: 'always' }}>
            <ScrollView scrollEnabled={true}>
                <Image source={require('../assets/icon.png')} style={styles.image} />
                <Spacer>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Description</Text>
                </Spacer>
                <Spacer>
                    <Text style={{ fontSize: 16 }}>Swing: Yes</Text>
                    <Text style={{ fontSize: 16 }}>Bench and tables: Yes</Text>
                    <Text style={{ fontSize: 16 }}>Slide: No</Text>
                    <Text style={{ fontSize: 16 }}>Other: Big sandpit</Text>
                </Spacer>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width
    }
})
export default MapDetailScreen