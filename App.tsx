import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import {PaperProvider} from 'react-native-paper';
const App: React.FC = () => {
  return (
    <PaperProvider>
      <AppNavigator />
    </PaperProvider>
  );
};

export default App;
