import React from 'react';
import {SafeAreaView, View} from 'react-native';
import styles from '../../styles/Layout/Layout';

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
};

const PageLayout = ({children, title}: LayoutProps) => {
  return (
    <SafeAreaView>
      <View style={styles.headerContent}>
        <View>{children}</View>
      </View>
    </SafeAreaView>
  );
};

export default PageLayout;
