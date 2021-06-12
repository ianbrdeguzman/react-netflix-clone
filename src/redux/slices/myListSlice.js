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
        removeFromMyListRequest: (state) => {
            state.loading = true;
        },
        removeFromMyListSuccess: (state, action) => {
            state.loading = false;
            state.myList = action.payload;
        },
        removeFromMyListFail: (state, action) => {
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
    removeFromMyListRequest,
    removeFromMyListSuccess,
    removeFromMyListFail,
} = myListSlice.actions;

export default myListSlice.reducer;
