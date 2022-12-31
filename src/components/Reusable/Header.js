/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, GeneralWidth, heightPixel } from '../../services'
import GeneralText from './GeneralText'

const Header = ({ heading, bottom, top }) => {
    return (
        <GeneralText
            text={heading}
            Color={colors.black}
            font={36}
            lineHeight={42}
            extraStyle={{
                ...GeneralWidth,
                marginTop: heightPixel(top ? top : 40),
                marginBottom: heightPixel(bottom ? bottom : 30)
            }}
        />
    )
}

export default Header

const styles = StyleSheet.create({})