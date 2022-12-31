/* eslint-disable prettier/prettier */
import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { appIcons, colors, fontPixel, heightPixel, widthPixel } from '../../services'

const CategoryComponent = () => {
    return (
        <View>
            <Image style={{ width: widthPixel(160), height: heightPixel(160), borderRadius: widthPixel(8) }} source={appIcons.categorySample} />
            <Text style={{ color: colors.textColor2, marginTop: heightPixel(10), fontSize: fontPixel(16) }}>Art & Culture</Text>
        </View>
    )
}

export default CategoryComponent

const styles = StyleSheet.create({})