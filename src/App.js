import React, { Component } from 'react';
import { NetworkProvider } from 'react-native-offline';
import { View } from 'react-native';
import { Provider } from 'redux-thunk';
import { RootStack } from './Routes';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* <NetworkProvider> */}
          <View style={{ flex: 1 }}>
            <RootStack />
          </View>
        {/* </NetworkProvider> */}
      </Provider>
    )
  }
}

export default App;