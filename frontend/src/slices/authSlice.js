import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
}

const authSlice = createSlice ({
    name: 'auth',
    initialState,
    reducers: {
        // user gets put in local storage
        setCredentials: (state, action) => {
            state.userInfo = action.payload;
            localStorage.setItem('userInfo', JSON.stringify(action.payload));

            const expirationTime = new Date().getTime() + 24 * 60 * 60 * 1000;
            localStorage.setItem('expirationTime', expirationTime);
        },
        // remove from localstorage
        logout: (state, action) => {
            state.userInfo = null;
            localStorage.clear();
        },
    },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;