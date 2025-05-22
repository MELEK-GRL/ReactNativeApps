import React from 'react';
import {View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import type {CustomTheme} from '../../theme/LightTheme';
import T from '../../components/Text/T';
import Button from '../../components/Buttons/Button';

const Splash = () => {
  const theme = useTheme();
  const colors = (theme as CustomTheme).colors;

  return (
    <View>
      <T color={colors.neutral600}>test</T>
      <Button>test</Button>
    </View>
  );
};

export default Splash;
