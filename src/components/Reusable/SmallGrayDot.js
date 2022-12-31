/* eslint-disable prettier/prettier */
import { View } from 'react-native'
import React from 'react'
import { colors, heightPixel } from '../../services'

const SmallGrayDot = () => {
    return (
        <View style={{
            backgroundColor: colors.textColor,
            width: 4,
            height: 4,
            marginRight: 12,
            borderRadius: 100,
            top: heightPixel(13)
        }} />
    )
}

export default SmallGrayDot
