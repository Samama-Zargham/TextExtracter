/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors, fontFamilyRoboto, GeneralWidth, heightPixel, widthPixel } from '../../services'
import GeneralText from './GeneralText'
import { EYE, LocationIcon } from '../../assets'
import AnySvg from '../../assets/svgs/Svgs'
import { FontSize12w400 } from './ProfileComp'

const PrimaryInput = ({ onChange, isBottomText, onPress, isRightIcon, inputWidth, disabled = false, placeholder, head, top, isEye = false }) => {
    const [iseye, setiseye] = useState(false)
    return (
        <View style={[top && { marginTop: heightPixel(top) }]}>
            <GeneralText
                font={16}
                text={head}
                fontWeight={400}
                extraStyle={[{ ...GeneralWidth, marginBottom: heightPixel(8) }, inputWidth && { width: widthPixel(inputWidth + 10) }]}
            />
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={onPress}
                style={[styles.Input, inputWidth && { width: widthPixel(inputWidth + 10) }]}>
                <TextInput
                    numberOfLines={1}
                    editable={!disabled}
                    style={[styles.textInput, inputWidth && { width: widthPixel(inputWidth) }]}
                    placeholder={placeholder}
                    placeholderTextColor={colors.lightGray}
                    onChangeText={onChange}
                    onPressIn={onPress}
                    secureTextEntry={!iseye && isEye}
                />
                {isEye ?
                    <TouchableOpacity
                        onPress={() => setiseye(!iseye)}
                        style={{ right: 5, alignSelf: "center" }} >
                        {
                            !iseye ?
                                <EYE height={heightPixel(30)}
                                    width={widthPixel(30)} />
                                :
                                <EYE height={heightPixel(30)}
                                    width={widthPixel(30)} stroke={colors.PrimaryColorGreen} />
                        }
                    </TouchableOpacity>
                    :
                    isRightIcon ?
                        <AnySvg
                            width={25}
                            height={25}
                            name={isRightIcon}
                            style={[{ marginLeft: 5, alignSelf: "center" }, inputWidth && { right: 32 }]}
                        />
                        : null
                }
            </TouchableOpacity>
            {isBottomText &&
                <Text style={{ ...GeneralWidth }}>
                    <FontSize12w400
                        text={"In STANDARD PACKAGE limit is 12 people."}
                    />
                    <FontSize12w400
                        text={"UPGRADE TO PREMIUM"}
                        color={colors.PrimaryColorGreen}
                    />
                </Text>}
        </View>

    )
}

export default PrimaryInput

const styles = StyleSheet.create({
    Input: {
        ...GeneralWidth,
        borderWidth: 1,
        borderColor: colors.lightGray,
        paddingLeft: widthPixel(5),
        height: heightPixel(56),
        borderRadius: 4,
        color: colors.textColor,
        // alignItems: 'center',
        flexDirection: "row"
    },
    textInput: {
        fontSize: 16,
        height: heightPixel(56),
        width: widthPixel(345),
        fontFamily: fontFamilyRoboto[400],
        color: colors.black
    }
})