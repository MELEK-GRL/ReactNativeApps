import React from 'react';
import {SafeAreaView, View} from 'react-native';
import useStyles from '../../styles/Layout/Layout';

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
};

const PageLayout = ({children}: LayoutProps) => {
  const styles = useStyles();
  return (
    <SafeAreaView>
      <View style={styles.headerContent}>
        <View>{children}</View>
      </View>
    </SafeAreaView>
  );
};

export default PageLayout;
