import { configureStore } from '@reduxjs/toolkit';
import shipmentSlice from './shipmentSlice';
import languageSlice from './languageSlice';
const store = configureStore({
    reducer:{

        shipmentDetail:shipmentSlice ,
        language: languageSlice
    }
});

export default store;