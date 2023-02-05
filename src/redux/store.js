
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authenticationSlice from './slices/authentication'
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
    key: 'authentication',
    storage: AsyncStorage,  // for storage purpose we are using AsyncStorage
}
const rootReducer = combineReducers({
    userAuth: authenticationSlice,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
})

export const persistor = persistStore(store)