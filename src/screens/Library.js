import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { TouchableScale } from '../components/common';
import BlockButton from '../components/BlockButton';
import GuestInfo from '../components/GuestInfo';
import withDelayedLoading from '../components/hoc/withDelayedLoading';
import RouteNames from '../RouteNames';
import { fetchFavoriteMovies, fetchWatchlistMovies } from '../api/movies';
import {
  getLibrarySettingsIcon,
  getLibraryWatchlistIcon,
  getLibraryFavoriteIcon
} from '../utils/icons';
import Theme from '../Theme';

class Library extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerRight: () => (
            <TouchableScale 
                onPress={() => {
                    navigation.navigate(RouteNames.Settings);
                }}
            >
                {getLibrarySettingsIcon()}
            </TouchableScale>
        )
    })

    onWatchListPressed = () => {
        
    }
}