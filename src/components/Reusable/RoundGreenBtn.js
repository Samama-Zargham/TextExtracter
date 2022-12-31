/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FORWARDARROW } from '../../assets'
import { colors, heightPixel, IOSAndroid, widthPixel } from '../../services'
import AnySvg, { EditPencil } from '../../assets/svgs/Svgs'

const RoundGreenBtn = ({ onPress, isEdit = false, child, bkg, containerStyle, childContainer, disabled = false }) => {
    return (
        <View style={[containerStyle && containerStyle]} >
            <TouchableOpacity
                disabled={disabled}
                activeOpacity={0.9}
                onPress={onPress}
                style={[{
                    alignItems: 'center', justifyContent: 'center',
                    backgroundColor: bkg,
                    width: widthPixel(56), height: widthPixel(56),
                    borderRadius: 100, ...IOSAndroid.elevation2
                }, childContainer && childContainer]}>
                {child ? child : < FORWARDARROW />}
                {isEdit ?
                    <AnySvg name={EditPencil} style={{ position: "absolute", left: widthPixel(47) }} width={20} height={20} />
                    :
                    null
                }
            </TouchableOpacity>
        </View>

    )
}

export default RoundGreenBtn

const styles = StyleSheet.create({})