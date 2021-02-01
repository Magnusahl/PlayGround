import React from 'react';
import MyStack from '../navigation/mainStackNavigation';
import AuthContextProvider from '../context/AuthContext';
import AuthNavigation from '../navigation/AuthNavigation';

const App = () => {
    return (
        <AuthContextProvider>
            <AuthNavigation />
        </AuthContextProvider>
        // <MyStack />

    )
}

export default App;