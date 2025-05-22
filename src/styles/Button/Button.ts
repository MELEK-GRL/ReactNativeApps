
import { useTheme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { CustomTheme } from '../../theme/LightTheme';

const useStyles = () => {
    const theme = useTheme();
    const colors = (theme as CustomTheme).colors;
    const { fs1px } = useSelector((state: any) => state.screen);

    return StyleSheet.create({
        buttonContent: {
            flex: 1,
        },
        button: {
            backgroundColor: colors.primary100,
            padding: fs1px * 10,
            borderRadius: fs1px * 8,
        },

    });
};

export default useStyles;
