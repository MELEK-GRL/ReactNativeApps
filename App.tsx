import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import Navigation from './src/navigation/Navigation';

function App(): React.JSX.Element {
  return (
    <View style={styles.sectionContainer}>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: 'red',
    flex: 1,
  },
});

export default App;
