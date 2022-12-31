/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import { colors, fontFamily, heightPixel, widthPixel, } from '../../services'
import GeneralText from '../Reusable/GeneralText'

const PrimaryButton = ({ top, bottom, lineHeight = 32, fontWeight, width, disable, titleColor, bkg, font, containerStyle, onPress, title }) => {

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            disabled={disable}
            style={[{
                justifyContent: "center",
                alignItems: "center",
                width: widthPixel(width ? width : 390),
                height: heightPixel(56),
                backgroundColor: bkg ? bkg : colors.PrimaryColorGreen,
                alignSelf: 'center',
                borderRadius: 4,
                marginTop: heightPixel(top ? top : 0),
                marginBottom: heightPixel(bottom ? bottom : 0)
            }, containerStyle && containerStyle]}
            onPress={onPress}>
            <GeneralText
                Color={titleColor ? titleColor : colors.white}
                font={font ? font : 24}
                fontWeight={fontWeight}
                text={title}
                lineHeight={lineHeight}
            />
        </TouchableOpacity>
    )
}


export default PrimaryButton
