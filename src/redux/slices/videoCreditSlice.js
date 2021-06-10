import { createSlice } from '@reduxjs/toolkit';

export const videoCreditSlice = createSlice({
    name: 'credit',
    initialState: {
        loading: false,
        credit: '',
        error: '',
    },
    reducers: {
        videoCreditRequest: (state) => {
            state.loading = true;
        },
        videoCreditSuccess: (state, action) => {
            state.loading = false;
            state.credit = action.payload;
        },
        videoCreditFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { videoCreditRequest, videoCreditSuccess, videoCreditFail } =
    videoCreditSlice.actions;

export default videoCreditSlice.reducer;
