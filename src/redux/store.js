import { configureStore } from '@reduxjs/toolkit';
import movieDetailSlice from './slices/movieDetailSlice';
import userLoginSlice from './slices/userLoginSlice';
import userRegisterSlice from './slices/userRegisterSlice';
import youtubeIdSlice from './slices/youtubeIdSlice';

export default configureStore({
    reducer: {
        userLogin: userLoginSlice,
        userRegister: userRegisterSlice,
        movieDetails: movieDetailSlice,
        youtubeId: youtubeIdSlice,
    },
});
