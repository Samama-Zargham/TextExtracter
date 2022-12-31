/* eslint-disable prettier/prettier */
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { generalROW, IOSAndroid, widthPixel } from '../../services'

const SocialLogins = () => {
    return (
        <View style={{ ...generalROW, width: "57%" }} >
            <RenderIcon isFB={true} />
            <RenderIcon isGOOGLE={true} />
            <RenderIcon isAPPLE={true} />
        </View>
    )
}
const RenderIcon = ({ isAPPLE, isFB, isGOOGLE }) => {

    let icon = isFB ? require("./icons/facebookLogo.png") :
        isAPPLE ? require("./icons/appleLogo.png") :
            isGOOGLE && require("./icons/googleLogo.png")
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={{
                width: widthPixel(56),
                height: widthPixel(56),
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 3,
                borderWidth: 0.5,
                borderColor: "#D9D9D9",
                ...IOSAndroid.elevation1
            }} >
            <Image
                style={{ width: 25, height: 25 }}
                source={icon}
            />
        </TouchableOpacity>
    )
}
export default SocialLogins

const styles = StyleSheet.create({})