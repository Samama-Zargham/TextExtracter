import { View } from 'react-native'
import React from 'react'
import { pixelSizeHorizontal, pixelSizeVertical } from '../../Utils/Responsiveness'
import { COLORS } from '../../Utils/Config'

export const Dot = () => {
    return (
        <View style={
            {
                backgroundColor: COLORS.lightGray,
                borderRadius: 100,
                height: pixelSizeVertical(8),
                width: pixelSizeHorizontal(8),
                marginRight: 3
            }
        } />
    )
}

export const Dash = () => {
    return (
        <View style={
            {
                backgroundColor: COLORS.BLACK,
                borderRadius: 100,
                height: pixelSizeVertical(8),
                width: pixelSizeHorizontal(19),
                marginRight: 3
            }
        } />
    )
}

