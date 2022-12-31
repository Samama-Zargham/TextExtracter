/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text, TouchableOpacity, Image, View, LogBox } from 'react-native'
import React from 'react'
import { FORWARDARROW } from '../../assets'
import { colors, heightPixel, IOSAndroid, widthPixel } from '../../services'

const RoundMultipleGreenBtns = ({ onPress, child, child1, child2, bkg, containerStyle, childContainer, disabled = false }) => {
    return (
        <View style={[containerStyle && containerStyle]} >
            <TouchableOpacity
                disabled={disabled}
                activeOpacity={0.8}
                onPress={onPress}
                style={[{
                    alignItems: 'center', justifyContent: 'center',
                    backgroundColor: bkg,
                    marginRight: widthPixel(20),
                    marginTop: heightPixel(20),
                    width: widthPixel(36), height: widthPixel(36),
                    borderRadius: 100,
                    ...IOSAndroid.elevation2
                },
                childContainer && childContainer
                ]}
            >
                {child ? child : < FORWARDARROW />}
                <TouchableOpacity
                    disabled={disabled}
                    activeOpacity={0.8}
                    onPress={onPress}
                    style={[{
                        alignItems: 'center', justifyContent: 'center',
                        backgroundColor: bkg,
                        marginLeft: widthPixel(50),
                        width: widthPixel(36), height: widthPixel(36),
                        borderRadius: 100, ...IOSAndroid.elevation2
                    }, childContainer && childContainer]}>
                    {child1 ? child1 : < FORWARDARROW />}
                </TouchableOpacity>
                <TouchableOpacity
                    disabled={disabled}
                    activeOpacity={0.8}
                    onPress={onPress}
                    style={[{
                        alignItems: 'center', justifyContent: 'center',
                        backgroundColor: bkg,
                        marginLeft: widthPixel(50),
                        width: widthPixel(36), height: widthPixel(36),
                        borderRadius: 100, ...IOSAndroid.elevation2
                    }, childContainer && childContainer]}>
                    {child2 ? child2 : < FORWARDARROW />}
                </TouchableOpacity>

            </TouchableOpacity>


        </View>

    )
}

export default RoundMultipleGreenBtns

const styles = StyleSheet.create({})