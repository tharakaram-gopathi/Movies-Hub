/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { Provider } from 'react-redux';
import AppRoute from './src/navigations/navigator';
import { store,persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';


function App(): JSX.Element {
  return (
    <>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

        <AppRoute />
        </PersistGate>

      </Provider>
    </>
  );
}

export default App;
