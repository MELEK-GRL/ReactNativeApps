import React from 'react';
import {View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import type {CustomTheme} from '../../theme/LightTheme';
import PageLayout from '../../components/Layout/PageLayout';
import T from '../../components/Text/T';

const Register = () => {
  const theme = useTheme();
  const colors = (theme as CustomTheme).colors;

  return (
    <PageLayout>
      <View>
        <T color={colors.neutral600}>SETTİNGS</T>
      </View>
    </PageLayout>
  );
};

export default Register;
