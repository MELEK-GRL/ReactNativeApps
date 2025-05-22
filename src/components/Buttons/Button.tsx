import {useTheme} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {CustomTheme} from '../../theme/LightTheme';
import T from '../Text/T';
import {useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import useStyles from '../../styles/Button/Button';

interface ButtonProps {
  buttonName?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({buttonName}) => {
  const theme = useTheme();
  const colors = (theme as CustomTheme).colors;
  const styles = useStyles();
  const {fs1px} = useSelector((state: any) => state.screen);

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      style={styles.buttonContent}
      colors={colors.buttonColors}>
      <TouchableOpacity style={styles.button}>
        <T size={fs1px * 20} color={colors.neutral900}>
          {buttonName}
        </T>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Button;
