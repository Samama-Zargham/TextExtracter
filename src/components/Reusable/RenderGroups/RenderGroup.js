/* eslint-disable prettier/prettier */
import { StyleSheet, TouchableOpacity, Image, Text, View } from 'react-native'
import React, { useState } from 'react'
import { colors, daysOfWeek, GeneralWidth, heightPixel, hp, IOSAndroid, MonthsOfYear, routes, widthPixel } from '../../../services'
import moment from 'moment';
import GeneralText from '../GeneralText';
import AddtoFavHeart from '../AddtoFavHeart';
import { JoinGroup, UserBlue } from '../../../assets';
import PrimaryButton from '../../button/PrimaryButton';
import SuccessPopup from '../SuccesPopup';
import { useNavigation } from '@react-navigation/native';

const RenderGroupCard = ({ title = 'Movie Night', createdText, createdTextColor, top, isJoin, isPaid, onPressJoin, height, bottom, isElevation = true, onPress }) => {
    let navigation = useNavigation()
    const [modalVisible, setmodalVisible] = useState(false)
    let date = new Date();
    let dateFormat = moment(date).format("ddd, MMM DD. HH:MM")
    let dummyImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Yr3K64tDhSr-3L7sWega_s0TH2vatx3Xnxj6C5DzMAEfhXJYq2xkFRAXMZRhpb5C1I0&usqp=CAU"
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.9}
            style={[styles.cardStyle, {
                marginTop: heightPixel(top ? top : 0),
                marginBottom: heightPixel(bottom ? bottom : 0),
                height: heightPixel(height ? height : isPaid ? 322 : 300),
            }, isElevation && { ...IOSAndroid.elevation5 }]} >
            <Image
                style={styles.imageStyle}
                source={{ uri: dummyImage }} />
            <View style={{ padding: 10, }} >
                <View style={styles.rowStyle}>
                    <GeneralText
                        font={16}
                        fontWeight={600}
                        text={dateFormat}
                    />
                    <AddtoFavHeart
                        iconSize={22}
                        fillColor={colors.errorColor}
                        emptyBorderColor={colors.errorColor}
                    />
                </View>
                {isPaid &&
                    <GeneralText
                        text={"12eur/hr"}
                    />}
                <GeneralText
                    font={24}
                    lineHeight={28}
                    fontWeight={400}
                    Color={colors.darkTextColor}
                    text={title}
                    extraStyle={{ marginVertical: 4 }}
                />
                <GeneralText
                    text={"Mountainous region in eastern Germany with the Königstein Fortress, Bastei Bridge & rock formations"}
                />
                <View style={styles.rowStyle} >
                    <GeneralText
                        font={16}
                        fontWeight={600}
                        Color={createdTextColor}
                        text={createdText}
                    />
                    <View style={styles.rowStyle}>
                        <GeneralText
                            font={20}
                            lineHeight={30}
                            fontWeight={500}
                            Color={colors.PrimaryColorBlue}
                            text={"7"}
                        />
                        <UserBlue width={widthPixel(22)} height={heightPixel(22)}
                            style={{ top: 1.5 }}
                        />
                    </View>

                </View>
                {isJoin &&
                    <PrimaryButton
                        onPress={() => setmodalVisible(true)}
                        containerStyle={{ marginTop: heightPixel(12) }}
                        title={"JOIN NOW"} />}
                <SuccessPopup
                    height={440}
                    modalvisible={modalVisible}
                    goToHome={() => {
                        navigation.replace("TabNav"),
                            setmodalVisible(false)
                    }} />
            </View>
        </TouchableOpacity>
    )
}

export const RenderSuggestedGroupHome = ({ top, onPress }) => {
    let date = new Date();
    let dateFormat = `${daysOfWeek[moment(date).day()]}, ${MonthsOfYear[moment(date).month()].abbreviation} ${moment(date).date()
        } .${moment(date).hour()}:${moment(date).minutes()}`
    let dummyImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Yr3K64tDhSr-3L7sWega_s0TH2vatx3Xnxj6C5DzMAEfhXJYq2xkFRAXMZRhpb5C1I0&usqp=CAU"
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.9}
            style={[styles.SuggestCardStyle, { marginTop: heightPixel(top ? top : 0) }]}
        >
            <Image
                style={styles.SuggestImageStyle}
                source={{ uri: dummyImage }} />
            <View style={{ padding: 10, }} >
                <GeneralText
                    font={16}
                    fontWeight={600}
                    text={dateFormat}
                />
                <View style={styles.rowStyle}>
                    <GeneralText
                        font={20}
                        lineHeight={24}
                        fontWeight={400}
                        Color={colors.darkTextColor}
                        text={'Movie Night'}
                        extraStyle={{ marginVertical: 3 }}
                    />
                    {/* <TouchableOpacity onPress={() => console.log("JoinGroup")}
                        style={{ padding: 2 }}> */}
                    <JoinGroup onPress={() => console.log("JoinGroup")} width={widthPixel(27)} height={heightPixel(27)} style={{ top: 1 }} />
                    {/* </TouchableOpacity> */}
                </View>


            </View>
        </TouchableOpacity>
    )
}
export default RenderGroupCard

const styles = StyleSheet.create({
    cardStyle: {
        ...GeneralWidth,
        backgroundColor: colors.white,
        borderRadius: 6
    },
    SuggestCardStyle: {
        width: widthPixel(185),
        height: heightPixel(200),
        backgroundColor: colors.white,
        ...IOSAndroid.elevation5, borderRadius: 6
    },
    imageStyle: {
        width: widthPixel(390),
        height: heightPixel(120),
        borderRadius: 6
    },
    SuggestImageStyle: {
        width: widthPixel(185),
        height: heightPixel(120),
        borderRadius: 6
    },
    rowStyle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }
})