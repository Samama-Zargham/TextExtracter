/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../services'

export const GrayLine = ({ width, extraStyle }) => {
    return (
        <View style={[
            { borderBottomWidth: 1, borderColor: colors.lightGray, width: width },
            extraStyle && extraStyle
        ]} />
    )
}
