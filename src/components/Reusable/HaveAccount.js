/* eslint-disable prettier/prettier */
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import GeneralText from './GeneralText'
import { colors, fontFamilyRoboto, fontPixel, generalROW, heightPixel } from '../../services'

const HaveAccount = ({ text1, text2, onPress, isTop = true, secondColor }) => {
    return (
        <Text
            style={[{
                fontSize: fontPixel(16),
                color: colors.darkTextColor,
                fontFamily: fontFamilyRoboto[400],
                alignSelf: "center",
            }, isTop && { marginTop: heightPixel(20) }]}>
            {text1}
            <Text
                onPress={onPress}
                style={{
                    fontSize: fontPixel(16),
                    color: secondColor ? secondColor : colors.PrimaryColorBlue,
                    fontFamily: fontFamilyRoboto[400]
                }}>
                {"  " + text2}
            </Text>
        </Text>
    )
}

export default HaveAccount

const styles = StyleSheet.create({})