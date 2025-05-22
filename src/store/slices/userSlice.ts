import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserProfile {
    id: string;
    name: string;
    email?: string;
    phone?: string;
}

interface UserState {
    profile: UserProfile | null;
    loading: boolean;
    error: string | null;
}

const initialState: UserState = {
    profile: null,
    loading: false,
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        fetchUserStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchUserSuccess(state, action: PayloadAction<UserProfile>) {
            state.profile = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchUserFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
        updateUser(state, action: PayloadAction<Partial<UserProfile>>) {
            if (state.profile) {
                state.profile = { ...state.profile, ...action.payload };
            }
        },
        clearUser(state) {
            state.profile = null;
            state.error = null;
            state.loading = false;
        },
    },
});

export const { fetchUserStart, fetchUserSuccess, fetchUserFailure, updateUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
