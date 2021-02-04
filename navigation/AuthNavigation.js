import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigation from './MainStackNavigation';
import UnAuthStack from './UnAuthStack';
import { AuthContext } from '../context/AuthContext';

export default function AuthNavigation() {
  const { user } = useContext(AuthContext);
  return (
    <NavigationContainer screenOptions={{ headerShown: false }}>
      {user ? <MainStackNavigation /> : <UnAuthStack />}
    </NavigationContainer>
  );
}
