import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { HeaderButton, } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

const CustomHeaderButton = props => {
    return <HeaderButton {...props}
        IconComponent={Ionicons}
        iconSize={21}
        color= 'black' />;
};

export default CustomHeaderButton;