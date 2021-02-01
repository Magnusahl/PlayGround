import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigation from './mainStackNavigation';
import UnAuthStack from './UnAuthStack';
import { AuthContext } from '../context/AuthContext';

export default function AuthNavigation() {
    const { user, isLoading } = useContext(AuthContext);

    return (
        <NavigationContainer>
            {user ? <MainStackNavigation /> : <UnAuthStack />}
        </NavigationContainer>
    );
}