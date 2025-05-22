import { DefaultTheme, Theme as NavigationTheme } from '@react-navigation/native';

// Özel renk paletini tanımla
const neutralColors = {
    neutral0: '#FFFFFF',
    neutral50: '#F2F2F2',
    neutral75: '#F8F8F8',
    neutral100: '#EBF1F4',
    neutral150: '#E3E5EA',
    neutral175: '#DEDEE0',
    neutral200: '#D8E2E9',
    neutral300: '#AEB8C2',
    neutral400: '#88919A',
    neutral500: '#727A83',
    neutral600: '#52585F',
    neutral700: '#3D4249',
    neutral800: '#292D32',
    neutral900: '#070C18',

    primary100: "#4f54a3",

    loginBackground: [
        '#d6c9e7',
        '#f7f6f9',
        '#d1d9ec',
        '#aebef2',
    ],



};

// CustomTheme arayüzünü genişlet
export interface CustomTheme extends NavigationTheme {
    colors: NavigationTheme['colors'] & typeof neutralColors;
}

// LightTheme'i oluştur
export const LightTheme: CustomTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'yellow',
        text: '#000',
        primary: '#1E90FF',
        card: '#f8f8f8',
        ...neutralColors, // özel renkleri ekle
    },
};
