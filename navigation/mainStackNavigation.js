import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from '../screens/StartScreen';
import LogIn from '../screens/LogIn';
import MapScreen from '../screens/MapScreen';
import TabNavigation from '../navigation/tabNavigation';

const Stack = createStackNavigator();

const MyStack = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="StartScreen" component={StartScreen} />
                <Stack.Screen name="LogIn" component={LogIn} />
                <Stack.Screen name="MapScreen" component={TabNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MyStack;