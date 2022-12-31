import React, { useEffect, useState } from 'react';
import BaseStack from './src/navigation/RootStack';
import Splash from './src/UI/AuthScreens/Splash';
import { PersistGate } from 'redux-persist/integration/react';
import Store from './src/Redux/Store';
import { persistedStore } from './src/Redux/Store';
import { Provider } from 'react-redux';
import { ProviderUseContextApi } from './src/ContextApi/ProviderUseContextApi';

export default function App() {
  const [splash, setsplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setsplash(false);
    }, 1000);
  }, []);

  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistedStore}>
        {splash ? <Splash /> :
          <ProviderUseContextApi>
            <BaseStack />
          </ProviderUseContextApi>
        }
      </PersistGate>
    </Provider>
  );
}


import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications