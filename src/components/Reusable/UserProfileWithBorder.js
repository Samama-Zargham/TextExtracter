/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, Image } from 'react-native'
import React from 'react'
import RoundGreenBtn from './RoundGreenBtn'
import { colors, dummyUserImage, widthPixel } from '../../services'

const UserProfileWithBorder = ({ onPress, container, childcontainer, width, height, borderColor }) => {
    return (
        <RoundGreenBtn
            onPress={onPress}
            containerStyle={[container && container]}
            childContainer={[childcontainer && childcontainer]}
            child={<Image source={{ uri: dummyUserImage }}
                style={
                    {
                        width: widthPixel(width ? width : 57),
                        height: widthPixel(height ? height : 57),
                        borderRadius: 100,
                        borderWidth: 1,
                        borderColor: borderColor ? borderColor : colors.PrimaryColorBlue,
                    }}
            />}
            bkg={colors.lightGray} />
    )
}

export default UserProfileWithBorder

const styles = StyleSheet.create({})