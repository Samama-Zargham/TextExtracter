/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { colors, heightPixel, routes } from '../../../services'
import RenderRequestCard from './RenderRequests'
import { AuthContext } from '../../../ContextApi/ProviderUseContextApi'

export const VerticalListRequests = ({ type, top, isWhislist, }) => {
    let navigation = useNavigation();
    const { activeDropdownValue } = React.useContext(AuthContext)
    const [dropdownValue, setdropdownValue] = activeDropdownValue
    let onPress = () => navigation.navigate(routes.RquestDetails)
    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            data={[1, 2, 3, 4, 5]}
            renderItem={({ item, index }) => {
                let createdText = type == "All" && index > 1 ? "Received: Yesterday" :
                    type == "Accepted" ? "Accepted: Yesterday" : type == "Past" ? "Expired: 28 days Ago" :
                        type == "Pending" ? `${dropdownValue == "Rent a Buddy" ? "Generated" : "Received:"} Yesterday` : "Expired: 28 days Ago"

                let requestCreatedDisplayColor = type == "Past" || type == "All" && index < 2 ? colors.textColor :
                    dropdownValue == "Rent a Buddy" ? colors.pink : colors.golden
                return (
                    <RenderRequestCard
                        isPendings={type == "Pending" || (type == "All" && index > 1)}
                        onPress={onPress}
                        createdText={createdText}
                        requestCreatedDisplayColor={requestCreatedDisplayColor}
                        bottom={index == 4 && 30}
                        top={index == 0 && isWhislist ? isWhislist : top}
                    />
                )
            }}
        />
    )
}



const styles = StyleSheet.create({})