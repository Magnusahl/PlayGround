import React from 'react';
import AuthContextProvider from '../context/AuthContext';
import AuthNavigation from '../navigation/AuthNavigation';

const App = () => {
  return (
    <AuthContextProvider>
      <AuthNavigation />
    </AuthContextProvider>
  );
};
export default App;
