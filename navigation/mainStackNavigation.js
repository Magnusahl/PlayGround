import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PlaygroundDetailScreen from '../screens/PlaygroundDetailScreen';
import TabNavigation from '../navigation/tabNavigation';

const Stack = createStackNavigator();

export default function MyStack() {

    return (

        <Stack.Navigator>
            <Stack.Screen name="MapScreen" component={TabNavigation} />
        </Stack.Navigator>

    )
}
