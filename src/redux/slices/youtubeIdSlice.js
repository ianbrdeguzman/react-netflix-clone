import { createSlice } from '@reduxjs/toolkit';

export const youtubeIdSlice = createSlice({
    name: 'youtubeId',
    initialState: {
        loading: false,
        id: '',
        error: '',
    },
    reducers: {
        youtubeIdRequest: (state) => {
            state.loading = true;
        },
        youtubeIdSuccess: (state, action) => {
            state.loading = false;
            state.id = action.payload;
        },
        youtubeIdFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { youtubeIdRequest, youtubeIdSuccess, youtubeIdFail } =
    youtubeIdSlice.actions;

export default youtubeIdSlice.reducer;
