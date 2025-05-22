import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
    id: string;
    name: string;
    email?: string;
}

interface AuthState {
    user: User | null;
    loading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    user: null,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // --- GİRİŞ (LOGIN) ---
        loginStart(state) {
            state.loading = true;
            state.error = null;
        },
        loginSuccess(state, action: PayloadAction<User>) {
            state.user = action.payload;
            state.loading = false;
            state.error = null;
        },
        loginFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },

        // --- KAYIT (REGISTER) ---
        registerStart(state) {
            state.loading = true;
            state.error = null;
        },
        registerSuccess(state, action: PayloadAction<User>) {
            state.user = action.payload;
            state.loading = false;
            state.error = null;
        },
        registerFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },

        // --- ÇIKIŞ (LOGOUT) ---
        logout(state) {
            state.user = null;
            state.loading = false;
            state.error = null;
        },
    },
});

export const {
    loginStart,
    loginSuccess,
    loginFailure,
    registerStart,
    registerSuccess,
    registerFailure,
    logout,
} = authSlice.actions;

export default authSlice.reducer;
