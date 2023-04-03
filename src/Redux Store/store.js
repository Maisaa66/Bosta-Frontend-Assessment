import { configureStore } from '@reduxjs/toolkit';
import shipmentSlice from './shipmentSlice';

const store = configureStore({
    reducer:{

        shipmentDetail:shipmentSlice ,
    }
});

export default store;