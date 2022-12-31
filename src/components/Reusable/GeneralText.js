/* eslint-disable prettier/prettier */
import { Text } from 'react-native'
import React from 'react'
import { colors, fontFamilyRoboto, fontPixel } from '../../services'

const GeneralText = ({ text, Color, font, OneLine, fontWeight, extraStyle, lineHeight, onPress }) => {
    return (
        <Text
            onPress={onPress}
            numberOfLines={OneLine ? 1 : 5}
            style={
                [
                    {
                        fontFamily: fontFamilyRoboto[fontWeight ? fontWeight : 400],
                        fontSize: fontPixel(font ? font : 14),
                        color: Color ? Color : colors.textColor, lineHeight: lineHeight ? lineHeight : 18
                    },
                    extraStyle && extraStyle
                ]
            }>{text}</Text>
    )
}

export default GeneralText