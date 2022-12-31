import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './CombineReducers';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  createMigrate,
  createTransform,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore} from 'redux-persist';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  // whitelist: ['userData'],
  // blacklist: [],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const AppStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat([]),
  });
};

const Store = AppStore();

export const persistedStore = persistStore(Store);
export default Store;
