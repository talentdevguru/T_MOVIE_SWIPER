import React, { Component } from 'react';
import { NetworkProvider } from 'react-native-offline';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { RootStack } from './Routes';
import store from './store';
import Icon from 'react-native-vector-icons/MaterialIcons';
// Icon.loadFont();
class App extends Component {

  render() {
    
    return (
      <Provider store={store}>
        <NetworkProvider>
          <View style={{ flex: 1 }}>
            <RootStack />
          </View>
        </NetworkProvider>
      </Provider>
    )
  }
}

export default App;