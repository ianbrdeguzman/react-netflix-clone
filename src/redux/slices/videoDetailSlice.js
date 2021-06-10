import { createSlice } from '@reduxjs/toolkit';

export const videoDetailSlice = createSlice({
    name: 'video',
    initialState: {
        loading: false,
        video: '',
        error: '',
    },
    reducers: {
        videoDetailRequest: (state) => {
            state.loading = true;
        },
        videoDetailSuccess: (state, action) => {
            state.loading = false;
            state.video = action.payload;
        },
        videoDetailFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { videoDetailRequest, videoDetailSuccess, videoDetailFail } =
    videoDetailSlice.actions;

export default videoDetailSlice.reducer;
