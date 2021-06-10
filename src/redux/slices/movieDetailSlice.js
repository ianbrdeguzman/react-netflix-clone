import { createSlice } from '@reduxjs/toolkit';

export const movieDetailSlice = createSlice({
    name: 'movie',
    initialState: {
        loading: false,
        movie: '',
        error: '',
    },
    reducers: {
        movieDetailRequest: (state) => {
            state.loading = true;
        },
        movieDetailSuccess: (state, action) => {
            state.loading = false;
            state.movie = action.payload;
        },
        movieDetailFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { movieDetailRequest, movieDetailSuccess, movieDetailFail } =
    movieDetailSlice.actions;

export default movieDetailSlice.reducer;
