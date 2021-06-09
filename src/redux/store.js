import { configureStore } from '@reduxjs/toolkit';
import userLoginSlice from './slices/userLoginSlice';
import userRegisterSlice from './slices/userRegisterSlice';

export default configureStore({
    reducer: {
        userLogin: userLoginSlice,
        userRegister: userRegisterSlice,
    },
});
