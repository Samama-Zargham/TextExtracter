/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AnyIcon, { Icons } from './AnyIcon'

const AddtoFavHeart = ({ iconSize, fillColor, emptyBorderColor, style }) => {
    const [isFav, setisFav] = useState(false)
    return (
        <AnyIcon
            onPress={() => setisFav(!isFav)}
            type={Icons.AntDesign}
            name={isFav ? "heart" : "hearto"}
            size={iconSize}
            color={isFav ? fillColor ? fillColor : "red" : emptyBorderColor ? emptyBorderColor : "red"}
            style={[style, { padding: 3 }]}
        />
    )
}

export default AddtoFavHeart

const styles = StyleSheet.create({})