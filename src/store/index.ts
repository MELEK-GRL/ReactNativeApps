import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import userReducer from './slices/userSlice';
import screenReducer from './slices/sizeSlice';


export const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        screen: screenReducer,

    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
