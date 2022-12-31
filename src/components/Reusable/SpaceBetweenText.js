/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fontFamilyRoboto, fontPixel, GeneralWidth, heightPixel } from '../../services'

const SpaceBetweenText = ({ text1, text2, onPressText2, marginTop }) => {
    return (
        <View style={{
            ...GeneralWidth,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: heightPixel(marginTop ? marginTop : 0)
        }} >
            <Text
                style={{
                    fontFamily: fontFamilyRoboto[500],
                    fontSize: fontPixel(24),
                    color: colors.darkTextColor
                }}
            >{text1}</Text>
            {text2 && <Text
                onPress={onPressText2}
                style={{
                    fontFamily: fontFamilyRoboto[600],
                    fontSize: fontPixel(16),
                    color: colors.PrimaryColorBlue
                }}
            >{text2}</Text>}
        </View>
    )
}

export default SpaceBetweenText

const styles = StyleSheet.create({})