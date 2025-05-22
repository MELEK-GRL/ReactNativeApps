import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Platform } from 'react-native';

interface ScreenState {
    width?: number;
    height?: number;
    w1px?: number;
    w4px?: number;
    w8px?: number;
    w12px?: number;
    w16px?: number;
    w20px?: number;

    h1px?: number;
    h4px?: number;
    h8px?: number;
    h12px?: number;
    h16px?: number;
    h20px?: number;

    fs1px?: number;
    fs4px?: number;
    fs8px?: number;
    fs12px?: number;
    fs14px?: number;
    fs16?: number;
    fs18?: number;
    fs20?: number;

    isPad: boolean | null;
    isEmulator: boolean;
    isAndroid: boolean;
    isIos: boolean;

    keyboard: number;
    tabBar: boolean;

    apiError: boolean;
    apiErrorCode: number | null;

    timer: number;
    getGlobalLoading: boolean;
}

const initialState: ScreenState = {
    isPad: null,
    isEmulator: false,
    isAndroid: Platform.OS === 'android',
    isIos: Platform.OS === 'ios',
    keyboard: 0,
    tabBar: true,
    apiError: false,
    apiErrorCode: null,
    timer: 900000,
    getGlobalLoading: false,
};

const screenSlice = createSlice({
    name: 'screen',
    initialState,
    reducers: {
        updateSize(state, action: PayloadAction<{ width: number; height: number; isPad: boolean }>) {
            const { width, height, isPad } = action.payload;
            const guidelineBaseWidth = 375;
            const guidelineBaseHeight = 812;

            const horizontalScale = (size: number) => (width / guidelineBaseWidth) * size;
            const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
            const moderateScale = (size: number, factor = 0.5) =>
                size + (horizontalScale(size) - size) * factor;

            state.w1px = horizontalScale(1);
            state.w4px = horizontalScale(4);
            state.w8px = horizontalScale(8);
            state.w12px = horizontalScale(12);
            state.w16px = horizontalScale(16);
            state.w20px = horizontalScale(20);

            state.h1px = verticalScale(1);
            state.h4px = verticalScale(4);
            state.h8px = verticalScale(8);
            state.h12px = verticalScale(12);
            state.h16px = verticalScale(16);
            state.h20px = verticalScale(20);

            state.fs1px = moderateScale(1);
            state.fs4px = moderateScale(4);
            state.fs8px = moderateScale(8);
            state.fs12px = moderateScale(12);
            state.fs14px = moderateScale(14);
            state.fs16 = moderateScale(16);
            state.fs18 = moderateScale(18);
            state.fs20 = moderateScale(20);

            state.width = width;
            state.height = height;
            state.isPad = isPad;
            state.isAndroid = Platform.OS === 'android';
            state.isIos = Platform.OS === 'ios';
        },

        updateKeyboard(state, action: PayloadAction<number>) {
            state.keyboard = action.payload;
        },

        updateTabBar(state, action: PayloadAction<boolean>) {
            state.tabBar = action.payload;
        },

        updateApiError(state, action: PayloadAction<{ apiError: boolean; apiErrorCode: number | null }>) {
            state.apiError = action.payload.apiError;
            state.apiErrorCode = action.payload.apiErrorCode;
        },

        updateTimer(state, action: PayloadAction<number>) {
            state.timer = action.payload;
        },

        updateGlobalLoading(state, action: PayloadAction<boolean>) {
            state.getGlobalLoading = action.payload;
        },
    },
});

export const {
    updateSize,
    updateKeyboard,
    updateTabBar,
    updateApiError,
    updateTimer,
    updateGlobalLoading,
} = screenSlice.actions;

export default screenSlice.reducer;
