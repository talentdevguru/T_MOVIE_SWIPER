import React from 'react';
import {
    createAppContainer,
    createSwitchNavigator,
    createBottomTabNavigator,
    StackActions,
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Splash from './screens/Splash';
import AuthWelcome from './screens/Auth/AuthWelcome';
import AuthLogin from './screens/Auth/AuthLogin';
import Header from './components/Header';

import RouteNames from './RouteNames';

import { fromRightWithFade } from './utils/navigation';

const defaultHeaderObject = {
    header: props => <Header scene={props.scene} />
};

const createDefaultStackNavigator = (screenObject, customOptions) =>
    createStackNavigator(screenObject, {
        defaultNavigationOptions: { ...defaultHeaderObject },
        cardStyle: {
            backgroundColor: '#000'
        },
        headerMode: 'screen',
        transitionConfig: () => fromRightWithFade(),
        ...customOptions
    });

const AuthStack = createDefaultStackNavigator({
    [RouteNames.AuthWelcome]: { screen: AuthWelcome },
    [RouteNames.AuthLogin]: { screen: AuthWelcome }
})

export const RootStack = createAppContainer(   
    createSwitchNavigator({
        [RouteNames.Splash]: { screen: Splash },
        [RouteNames.AuthStack]: { screen: AuthStack }
    })
);
