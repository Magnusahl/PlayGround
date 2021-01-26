import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Dimensions, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ListScreen from '../screens/ListScreen';
import MapScreen from '../screens/MapScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        // <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                    iconName = focused
                        ? 'ios-information-circle'
                        : 'ios-information-circle-outline';
                } else if (route.name === 'Settings') {
                    iconName = focused ? 'ios-list-box' : 'ios-list';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }} >
            <Tab.Screen name="MapScreen" component={MapScreen} />
            <Tab.Screen name="ListScreen" component={ListScreen} />
        </Tab.Navigator>
        // </NavigationContainer>
    );
}

export default TabNavigation;