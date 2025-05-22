import {useTheme} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {CustomTheme} from '../../theme/LightTheme';
import T from '../Text/T';
import {useSelector} from 'react-redux';

interface ButtonProps {
  buttonName?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({buttonName}) => {
  const theme = useTheme();
  const colors = (theme as CustomTheme).colors;
  const {fs1px} = useSelector((state: any) => state.screen);

  const styles = StyleSheet.create({
    button: {
      backgroundColor: colors.primary100,
      padding: 10,
      borderRadius: 8,
    },
  });

  return (
    <TouchableOpacity style={styles.button}>
      <T size={fs1px * 20} color={colors.neutral900}>
        {buttonName}
      </T>
    </TouchableOpacity>
  );
};

export default Button;
