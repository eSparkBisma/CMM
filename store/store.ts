import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import categorySlice from './categorySlice';
import createDebugger from 'redux-flipper';
import { Category } from './categorySlice';


const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export interface RootState {
  categories: Category; // Include state type of your category slice
  // Add other slices as needed
}

export const rootReducer = combineReducers({
  task: categorySlice,
  // Add other reducers here
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: {
    task: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(createDebugger()),
});

const persistor = persistStore(store);

export { store, persistor };
