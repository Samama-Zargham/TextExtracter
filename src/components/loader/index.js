import React from 'react';
import { StyleSheet, View, } from 'react-native';

import { colors, hp, loaderStyles, wp } from '../../services';

var Spinner = require('react-native-spinkit');

export const Loader = props => {
    return (
        props.loading ?
            <View style={styles.container}>
                <Spinner
                    style={styles.spinerStyle}
                    isVisible={props.loading}
                    size={60}
                    type={loaderStyles.WordPress}
                    color={colors.theme}
                />
            </View>
            :
            <View></View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: hp(100),
        width: wp(100),
        position: 'absolute',
        zIndex: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'

    },
    spinerStyle: {
        marginBottom: hp(0)
    },
})