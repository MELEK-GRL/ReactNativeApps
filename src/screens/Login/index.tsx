import React from 'react';
import {Text, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import type {CustomTheme} from '../../theme/LightTheme'; // kendi yolunu kullan
import PageLayout from '../../components/Layout/PageLayout';

const Login = () => {
  const theme = useTheme();
  const colors = (theme as CustomTheme).colors;

  return (
    <PageLayout>
      <View>
        <Text style={{backgroundColor: colors.neutral400}}>
          LOGİNNN dbsjhvbfhdsbvh
        </Text>
      </View>
    </PageLayout>
  );
};

export default Login;
