/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import RenderGroupCard from './RenderGroup'
import { useNavigation } from '@react-navigation/native'
import { colors, heightPixel, routes } from '../../../services'
import { AuthContext } from '../../../ContextApi/ProviderUseContextApi'

export const VerticalListGroups = ({ isJoin, top, isRequest, height, isElevation, type }) => {
    let navigation = useNavigation();
    const { activeDropdownValue } = React.useContext(AuthContext)
    const [dropdownValue, setdropdownValue] = activeDropdownValue
    let onPress = () => navigation.navigate(routes[isRequest ? "SeeRequest" : "groupDetails"])
    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            data={[1, 2, 3, 4, 5]}
            renderItem={({ item, index }) => {
                let createdTextColor = type === "Past" ? colors.textColor :
                    dropdownValue == "Created Groups" ? colors.PrimaryColorGreen :
                        colors.PrimaryColorBlue
                let createdText = dropdownValue == "Created Groups" ? "Created: Yesterday" : "Joined: Yesterday"
                return (
                    <RenderGroupCard
                        onPress={onPress}
                        isElevation={isElevation}
                        height={height}
                        isJoin={isJoin}
                        top={!index == 0 || top ? 32 : 0}
                        bottom={index > 2 && 23}
                        createdTextColor={createdTextColor}
                        isPaid={index > 2}
                        createdText={createdText}
                    />
                )
            }}
        />
    )
}



const styles = StyleSheet.create({})