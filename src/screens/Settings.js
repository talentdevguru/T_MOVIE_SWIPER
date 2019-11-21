import React from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, StyleSheet } from 'react-native';
import { logOutUser } from '../actions/AuthActions';
import { AppText } from '../components/common';
import BlockButton from '../components/BlockButton';
import withDelayedLoading from '../components/hoc/withDelayedLoading';
import Theme from '../Theme';