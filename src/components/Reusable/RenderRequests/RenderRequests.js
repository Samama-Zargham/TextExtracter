/* eslint-disable prettier/prettier */
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { cardDetailText, colors, daysOfWeek, GeneralWidth, heightPixel, IOSAndroid, MonthsOfYear, widthPixel } from '../../../services'
import GeneralText from '../GeneralText'
import UserProfileWithBorder from '../UserProfileWithBorder'
import { SwipperQuotes } from '../../../assets'
import moment from 'moment';
import AddtoFavHeart from '../AddtoFavHeart'
import PrimaryButton from '../../button/PrimaryButton'
import { AuthContext } from '../../../ContextApi/ProviderUseContextApi'
import SuccessPopup from '../SuccesPopup'
import { useNavigation } from '@react-navigation/native'

const RenderRequestCard = ({
    title = 'Need buddy for watching movie',
    top,
    height,
    bottom,
    isElevation = true,
    onPress,
    requestCreatedDisplayColor,
    createdText,
    isPendings
}) => {
    let navigation = useNavigation()
    let date = new Date();
    let dateFormat = moment(date).format("ddd, MMM DD. HH:MM")
    const { activeDropdownValue } = React.useContext(AuthContext)
    const [dropdownValue, setdropdownValue] = activeDropdownValue
    let isPending = isPendings && dropdownValue == "Alone24 Buddies";
    const [modalVisible, setmodalVisible] = useState({
        flag: false,
        SuccessTitle: "Congratulations"
    })
    const handleAccept = () => {
        setmodalVisible({ SuccessTitle: "Congratulations", flag: true })
    }
    const handleDecline = () => {
        setmodalVisible({ SuccessTitle: "Request Declined", flag: true })
    }
    return (
        <>
            <TouchableOpacity
                onPress={onPress}
                activeOpacity={0.9}
                style={[styles.cardStyle,
                {
                    marginTop: heightPixel(top ? top : 30),
                    marginBottom: heightPixel(bottom ? bottom : 0),
                    height: heightPixel(height ? height : isPending ? 410 : 340),
                },
                isElevation && { ...IOSAndroid.elevation5 }]} >
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <GeneralText
                        OneLine={1}
                        font={22}
                        lineHeight={28}
                        fontWeight={500}
                        Color={colors.darkTextColor}
                        text={title}
                        extraStyle={{ marginVertical: 4, width: "90%" }}
                    />
                    <AddtoFavHeart iconSize={20} />
                </View>

                <Text >
                    <GeneralText
                        font={16}
                        lineHeight={24}
                        fontWeight={600}
                        text={dateFormat}
                    />
                    <GeneralText
                        font={16}
                        lineHeight={24}
                        fontWeight={600}
                        Color={colors.PrimaryColorBlue}
                        text={"   " + "12eur/hr"}
                    />
                </Text>
                <UserProfileWithBorder container={{ marginTop: 10 }} borderColor={colors.pink} />
                <GeneralText
                    font={16}
                    lineHeight={24}
                    fontWeight={600}
                    Color={colors.pink}
                    text={"Isabelle Charles"}
                    extraStyle={{ marginTop: 10 }}
                />

                <SwipperQuotes style={{ marginVertical: 7 }} />
                <Text>
                    <GeneralText
                        font={12}
                        text={cardDetailText}
                    />
                    <GeneralText
                        font={12}
                        Color={colors.PrimaryColorBlue}
                        text={"Know more"}
                    />
                </Text>

                <GeneralText
                    font={16}
                    lineHeight={24}
                    fontWeight={600}
                    Color={requestCreatedDisplayColor}
                    text={createdText}
                    extraStyle={{ marginVertical: 5 }}
                />
                {isPending && dropdownValue == "Alone24 Buddies" &&
                    <View style={styles.buttomStyle} >
                        <PrimaryButton
                            onPress={handleAccept}
                            font={20}
                            width={170}
                            bkg={colors.PrimaryColorGreen}
                            title={"ACCEPT"} />
                        <PrimaryButton
                            onPress={handleDecline}
                            font={20}
                            width={170}
                            bkg={colors.errorColor}
                            title={"DECLINE"} />
                    </View>

                }
            </TouchableOpacity>
            <SuccessPopup
                btncontainerStyle={{ marginVertical: 20 }}
                addedtoCalender={false}
                height={420}
                modalvisible={modalVisible.flag}
                SuccessTitle={modalVisible.SuccessTitle}
                goToHome={() => {
                    navigation.replace("TabNav"),
                        setmodalVisible({ ...modalVisible, flag: false })
                }} />
        </>

    )
}

export default RenderRequestCard

const styles = StyleSheet.create({
    cardStyle: {
        ...GeneralWidth,
        backgroundColor: colors.white,
        borderRadius: 6,
        padding: 10
    },
    buttomStyle: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        justifyContent: "space-between",
        marginTop: 4
    },
})