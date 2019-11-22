import React from 'react';
import { withMappedNavigationProps } from 'react-navigation-props-mapper';
import { View, StyleSheet } from 'react-native';
import MovieFetchList from '../../components/MovieComponents/MovieFetchList';
import withDelayedLoading from '../../components/hoc/withDelayedLoading';
import Theme from '../../Theme';