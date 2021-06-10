import { createSlice } from '@reduxjs/toolkit';

export const relatedVideosSlice = createSlice({
    name: 'movie',
    initialState: {
        loading: false,
        videos: '',
        error: '',
    },
    reducers: {
        relatedVideosRequest: (state) => {
            state.loading = true;
        },
        relatedVideosSuccess: (state, action) => {
            state.loading = false;
            state.videos = action.payload;
        },
        relatedVideosFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { relatedVideosRequest, relatedVideosSuccess, relatedVideosFail } =
    relatedVideosSlice.actions;

export default relatedVideosSlice.reducer;
