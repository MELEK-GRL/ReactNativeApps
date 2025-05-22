import React from 'react';

import useStyles from '../../styles/Login/Login';
import T from '../../components/Text/T';
import {useTheme} from '@react-navigation/native';
import {CustomTheme} from '../../theme/LightTheme';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../../components/Buttons/Button';
import {useSelector} from 'react-redux';

const Login = () => {
  const styles = useStyles();
  const theme = useTheme();
  const {h1px, w1px} = useSelector((state: any) => state.screen);

  const colors = (theme as CustomTheme).colors;

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      style={styles.loginContent}
      colors={colors.loginBackground}>
      <T color={colors.neutral900}>LOGİN LOGİN LOGİN </T>
      <Button buttonName={'BUTTONNN'} />
    </LinearGradient>
  );
};

export default Login;
