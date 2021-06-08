import { createSlice } from '@reduxjs/toolkit';

export const userRegisterSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        user: '',
        error: '',
    },
    reducers: {
        registerRequest: (state) => {
            state.loading = true;
        },
        registerSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload;
        },
        registerFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { registerRequest, registerSuccess, registerFail } =
    userRegisterSlice.actions;

export default userRegisterSlice.reducer;
