import React, { Component } from 'react';
import { NetworkProvider } from 'react-native-offline';
import { View } from 'react-native';
import { Provider } from 'redux-thunk';
import { RootStack } from './Routes';
import store from './store';

class App extends Component {
  
  render() {
    console.log("App.js");
    return (
      <Provider store={store}>
        <NetworkProvider>
          <View style={{ flex: 1 }}>
          {console.log("App_under_view.js")}
            <RootStack />
          </View>
        </NetworkProvider>
      </Provider>
    )
  }
}

class App1 extends Component {
  
  render() {
    console.log("App1.js");
    return (
          <View style={{ flex: 1 }}>
          </View>
    )
  }
}

export default App;