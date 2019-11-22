import React from 'react';
import {
    createAppContainer,
    createSwitchNavigator,
    StackActions,
} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Splash from './screens/Splash';
import AuthWelcome from './screens/Auth/AuthWelcome';
import AuthLogin from './screens/Auth/AuthLogin';
import Browse from './screens/Browse';
// import Explore from './screens/Explore';
// import Library from './screens/Library';
import MovieListScreen from './screens/Movie/MoviesListScreen';

import Header from './components/Header';
import NavbarWrapper from './components/NavbarWrapper';
import NavbarButtonWrapper from './components/NavbarButtonWrapper';
import RouteNames from './RouteNames';
import Theme from './Theme';
import { getNavbarBrowseIcon, getNavbarExploreIcon, getNavbarLibraryIcon } from './utils/icons';
import { getFontStyleObject } from './utils/font';
import { fromRightWithFade } from './utils/navigation';

const TabNames = {
    browse: 'Browse',
    explore: 'Explore',
    library: 'Library'
};

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

// Navigation
const BottomTabs = createBottomTabNavigator(
    {
        [TabNames.browse]: {
            screen: createDefaultStackNavigator({
                Browse,
                [RouteNames.MovieListScreen]: MoviesListScreen,
                // [RouteNames.MovieDetailsScreen]: MovieDetailsScreen
            })
        },
        [TabNames.explore]: {
            screen: createDefaultStackNavigator({
                Browse
            })
        },
        [TabNames.library]: {
            screen: createDefaultStackNavigator({
                Browse
            })
        }
    },
    {
        tabBarOptions: {
            activeBackgroundColor: Theme.colors.bottomNavbar,
            inactiveBackgroundColor: Theme.colors.bottomNavbar,
            activeTintColor: Theme.colors.lightest,
            inactiveTintColor: Theme.colors.light,
            labelStyle: { ...getFontStyleObject() },
            style: {
                borderTopColor: Theme.colors.bottomNavbar,
                height: Theme.specifications.bottomNavbarHeight,
                backgroundColor: Theme.colors.bottomNavbar
            }
        },
        defaultNavigationOptions: ({ navigation }) => ({
            lazy: false,
            tabBarIcon: ({ tintColor }) => {
                const {routeName} = navigation.state;
                switch (routeName) {
                    case TabNames.browse:
                        return getNavbarBrowseIcon({ tintColor });
                    case TabNames.browse:
                        return getNavbarBrowseIcon({ tintColor });
                    case TabNames.browse:
                        return getNavbarBrowseIcon({ tintColor });
                    default:
                        return null;
                }
            },
            tabBarComponent: NavbarWrapper,
            tabBarButtonComponent: NavbarButtonWrapper,
            tabBarOnPress: ({ navigation, defaultHandler }) => {
                navigation.dispatch(StackActions.popToTop());
                defaultHandler();
            }
        })
    }
)

const AuthStack = createDefaultStackNavigator({
    [RouteNames.AuthWelcome]: { screen: AuthWelcome },
    [RouteNames.AuthLogin]: { screen: AuthLogin }
});

const HomeStack = createStackNavigator(
    { [RouteNames.BottomTabs]: { screen: BottomTabs } },
    { defaultNavigationOptions: () => ({ header: null })}
);

export const RootStack = createAppContainer(   
    createSwitchNavigator({
        [RouteNames.Splash]: { screen: Splash },
        [RouteNames.AuthStack]: { screen: AuthStack },
        [RouteNames.HomeStack]: { screen: HomeStack },
    })
);
