import React from 'react';
import Router from './src/navigation/Router';
import {Provider} from 'react-redux';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {store} from './src/store';

const gestureHandlerStyle = {
  flex: 1,
};

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <GestureHandlerRootView style={gestureHandlerStyle}>
          <Router />
          <Toast />
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
