import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import FooterLoading from '../FooterLoading';
import MovieList from './MovieList';
import withRefetch from '../hoc/withRefetch';
import { filterDuplicateMovies } from '../../utils/movies';
import Theme from '../../Theme';