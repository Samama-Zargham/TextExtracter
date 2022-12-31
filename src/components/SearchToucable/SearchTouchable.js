/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native'
import React from 'react'
import { colors, fontFamilyRoboto, fontPixel, generalROW, heightPixel, IOSAndroid } from '../../services';


let SearchIcon = require("./icons/SearchIcon.png");

const SearchTouchable = ({ top, bottom, searchdata }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => console.log("SearchTouchable")}
            style={{
                ...generalROW,
                backgroundColor: colors.white,
                ...IOSAndroid.elevation4,
                height: heightPixel(56),
                borderRadius: 6,
                paddingHorizontal: 10,
                marginTop: heightPixel(top ? top : 30),
                marginBottom: heightPixel(bottom ? bottom : 15)
            }}
        >
            <Text style={{
                fontSize: fontPixel(16),
                fontFamily: fontFamilyRoboto[400],
                color: colors.lightGray,
            }} >What are you looking for?</Text>
            <Image
                style={{ width: 25, height: 25 }}
                source={SearchIcon}
            />
        </TouchableOpacity>
    )
}

export default SearchTouchable

const styles = StyleSheet.create({})