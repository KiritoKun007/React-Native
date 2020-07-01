
import React from 'react';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
// import * as Sentry from 'sentry-expo';
import { store, persistor } from './store/configureStore'
import Index from './Index';

export default function App() {

  console.log(store, persistor)

  return (
    <Provider store={store}> 
      <PersistGate loading={null} persistor={persistor}> 
        <Index />
      </PersistGate>  
    </Provider>
  );
}
