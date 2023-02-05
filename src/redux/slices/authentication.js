import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    isLoggedIn: false,
    email: null,
    password: null
}

const authSlice = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {
        setSignIn: (state, action) => { // Set data while Login with valid credentials

            state.email = action.payload.email;
            state.isLoggedIn = action.payload.isLoggedIn;
            state.password = action.payload.password;

        },
        setSignOut: (state) => { // Delete the data while Logout
            state.email = null;
            state.password = null;
            state.isLoggedIn = false;
        }
    }
});


export const { setSignIn, setSignOut } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.userAuth.isLoggedIn;
export const selectEmail = (state) => state.userAuth.email;
export const selectPassword = (state) => state.userAuth.password;

export default authSlice.reducer;