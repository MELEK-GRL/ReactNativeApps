import React from 'react';
import {View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import type {CustomTheme} from '../../theme/LightTheme';
import PageLayout from '../../components/Layout/PageLayout';
import T from '../../components/Text/T';
import Button from '../../components/Buttons/Button';

const Register = () => {
  const theme = useTheme();
  const colors = (theme as CustomTheme).colors;

  return (
    <PageLayout>
      <View>
        <T color={colors.neutral600}>test</T>
        <Button>test</Button>
      </View>
    </PageLayout>
  );
};

export default Register;
