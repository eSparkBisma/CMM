import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import {PaperProvider} from 'react-native-paper';
import {Provider as ReduxProvider} from 'react-redux';
import {persistor, store} from './store/store';
import {PersistGate} from 'redux-persist/integration/react';

const App: React.FC = () => {
  return (
    <ReduxProvider store={store}>
      <PaperProvider>
        <PersistGate persistor={persistor} />
        <AppNavigator />
      </PaperProvider>
    </ReduxProvider>
  );
};

export default App;
