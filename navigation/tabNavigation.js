import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ListScreen from '../screens/ListScreen';
import MapScreen from '../screens/MapScreen';
import UserScreen from '../screens/UserScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'ListScreen') {
                        iconName = focused ? 'list' : 'list-outline';
                    } else if (route.name === 'MapScreen') {
                        iconName = focused ? 'map' : 'map-outline';
                    } else if (route.name === 'UserScreen') {
                        iconName = focused ? 'person-circle' : 'person-circle-outline';
                    }
                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'blue',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="ListScreen" component={ListScreen} />
            <Tab.Screen name="MapScreen" component={MapScreen} />
            <Tab.Screen name="UserScreen" component={UserScreen} />
        </Tab.Navigator>
    );
};

export default TabNavigation;
