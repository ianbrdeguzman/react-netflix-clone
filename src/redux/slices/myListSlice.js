import { createSlice } from '@reduxjs/toolkit';

export const myListSlice = createSlice({
    name: 'myList',
    initialState: {
        loading: false,
        myList: '',
        error: '',
    },
    reducers: {
        addToMyListRequest: (state) => {
            state.loading = true;
        },
        addToMyListSuccess: (state, action) => {
            state.loading = false;
            state.myList = action.payload;
        },
        addToMyListFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        getMyListRequest: (state) => {
            state.loading = true;
        },
        getMyListSuccess: (state, action) => {
            state.loading = false;
            state.myList = action.payload;
        },
        getMyListFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    addToMyListRequest,
    addToMyListSuccess,
    addToMyListFail,
    getMyListRequest,
    getMyListSuccess,
    getMyListFail,
} = myListSlice.actions;

export default myListSlice.reducer;
