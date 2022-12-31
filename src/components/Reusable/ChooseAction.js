/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import { colors, GeneralWidth, heightPixel, IOSAndroid, routes, widthPixel } from '../../services'
import GeneralText from './GeneralText'
import { Alone24Buddy, CreateGroup, JoinGroup, RentaBuddy } from '../../assets'
import { useNavigation } from '@react-navigation/native'

const ChooseAction = () => {
    let navigation = useNavigation()
    return (
        <View style={{
            flexWrap: "wrap",
            flexDirection: "row",
            ...GeneralWidth,
            justifyContent: "space-between",
        }}>
            <Actions
                onPress={() => navigation.navigate(routes.CreateGroupForm)}
                title="Create Group"
                textColor={colors.PrimaryColorGreen}
                icon={<CreateGroup />} />
            <Actions
                onPress={() => navigation.navigate(routes.recomendedGroups)}
                title={"Join a Group"}
                textColor={colors.PrimaryColorBlue}
                icon={<JoinGroup />} />
            <Actions
                onPress={() => navigation.navigate(routes.CreateRentaBuddyForm)}
                title={"Rent a Buddy"}
                textColor={colors.pink}
                icon={<RentaBuddy />} />
            <Actions
                onPress={() => navigation.navigate(routes.CreateAloneBuddyForm)}
                title={"Be Alone24 Buddy"}
                textColor={colors.golden}
                icon={<Alone24Buddy />} />
        </View>
    )
}

export function Actions({ title, icon, containerStyle, textColor, isGroupDetail, isBottom, onPress, disabled = false }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            activeOpacity={0.9}
            style={[{
                width: widthPixel(185),
                height: (120),
                backgroundColor: colors.white,
                ...IOSAndroid.elevation5,
                marginTop: heightPixel(20),
                borderRadius: 6,
                alignItems: "center",
                justifyContent: "center"
            }, containerStyle && containerStyle]}
        >
            {!isGroupDetail && icon}
            <GeneralText
                text={title}
                Color={textColor}
                font={20}
                fontWeight={500}
                lineHeight={24}
                extraStyle={{ bottom: heightPixel(isBottom ? isBottom : 0) }}
            />
            {isGroupDetail && icon}
        </TouchableOpacity>
    )
}

export default ChooseAction

const styles = StyleSheet.create({})