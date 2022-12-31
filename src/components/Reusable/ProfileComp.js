/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors, dummyUserImage, GeneralWidth, heightPixel, IOSAndroid, routes, widthPixel, } from '../../services'
import RoundGreenBtn from '../../components/Reusable/RoundGreenBtn'
import GeneralText from '../../components/Reusable/GeneralText'
import { useFocusEffect, useIsFocused, useNavigation } from '@react-navigation/native'
import { AuthContext } from '../../ContextApi/ProviderUseContextApi'
import { SwipperQuotes, TickIcon } from '../../assets'
import { IconRow } from '../../screens/appFlow/groups/GroupDetails'
import PrimaryButton from '../button/PrimaryButton'
import UserProfileWithBorder from './UserProfileWithBorder'

const ProfileComp = ({
    isElevation = true,
    isProfessionLevel,
    isEdit,
    aboutColor = colors.textColor,
    aboutText = "22yrs-Female"
}) => {
    let navigation = useNavigation()
    const { tabsHeight } = React.useContext(AuthContext)
    const [tabHeight, settabHeight] = tabsHeight
    let focused = useIsFocused()

    // useFocusEffect(
    //     React.useCallback(() => {
    //         settabHeight(550)
    //     }, [focused]))

    return (
        <ScrollView showsVerticalScrollIndicator={false} >
            <View
                activeOpacity={0.9}
                style={[styles.cardStyle, {
                    marginTop: heightPixel(30),
                    marginBottom: heightPixel(5)
                }, isElevation && { ...IOSAndroid.elevation4 }]}>
                {isEdit &&
                    <TouchableOpacity
                        onPress={() => navigation.navigate(routes.EditProfile)}   >
                        <GeneralText
                            Color={colors.golden}
                            font={16}
                            fontWeight={500}
                            text={'Edit Profile'}
                            lineHeight={24}
                            extraStyle={{
                                alignSelf: 'flex-end',
                                marginHorizontal: 10,
                                marginTop: heightPixel(5)
                            }}
                        />
                    </TouchableOpacity>}
                <UserProfileWithBorder
                    height={80}
                    width={80}
                    borderColor={colors.golden}
                    container={{
                        alignSelf: "center",
                        marginTop: heightPixel(20)
                    }}
                />
                <View style={styles.heading}>
                    <GeneralText
                        font={16}
                        fontWeight={600}
                        text={'Lilly Bloom'}
                        lineHeight={24}
                        extraStyle={{ width: widthPixel(90) }}
                        OneLine
                    />
                    <View style={styles.tickBox}>
                        <TickIcon
                            width={widthPixel(12)}
                            height={heightPixel(9)} />
                    </View>
                </View>
                <GeneralText
                    Color={aboutColor}
                    font={16}
                    fontWeight={600}
                    lineHeight={24}
                    text={aboutText}
                    extraStyle={{ alignSelf: 'center' }}
                />
                {isProfessionLevel &&
                    <PrimaryButton bkg={colors.golden}
                        fontWeight={600} lineHeight={24}
                        font={16} width={170}
                        title={'Professional Level'}
                        containerStyle={{
                            alignSelf: 'flex-start',
                            marginTop: 10, marginBottom: 16
                        }}
                    />
                }
                <IconRow istop={30} isWidth={false} isFav={false} isHome={true} text="Frankfurt, Germany" />
                <IconRow isWidth={false} isLocation={true} />
                <IconRow isWidth={false} isLanguage={true} text="German/English" />

                <SwipperQuotes style={{ marginLeft: 3, marginTop: heightPixel(20) }} />

                <FontSize12w400 text={aboutyouText} />
                <GeneralText
                    text={'Expertise'}
                    fontWeight={500}
                    lineHeight={18}
                    font={20}
                    Color={colors.black}
                    extraStyle={{ marginTop: heightPixel(24), marginLeft: 4 }}
                />
                <FontSize12w400 text={Expertise} />
            </View>
        </ScrollView>
    )
}
export const FontSize12w400 = ({ extraStyle, text, color = colors.textColor }) => (
    <GeneralText
        font={12}
        fontWeight={400}
        lineHeight={18}
        text={text}
        Color={color}
        extraStyle={[{ marginTop: heightPixel(10), marginLeft: 4, }, extraStyle && extraStyle]}
    />
)
export default ProfileComp

const styles = StyleSheet.create({
    cardStyle: {
        ...GeneralWidth,
        backgroundColor: colors.white,
        borderRadius: 6,
        padding: 14
    },
    heading: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 15,
    },

    ImageStyle: {
        borderWidth: 1.5,
        width: widthPixel(62),
        height: widthPixel(62),
        borderRadius: 100,
    },
    centerView: {
        alignSelf: 'center',
        marginTop: heightPixel(21)
    },
    tickBox: {
        width: 20,
        height: 20,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.golden,
        marginLeft: widthPixel(5),
    }
})

let aboutyouText = "'Pleasure, my name is Lily, I am from Maine and I am based in Frankfurt. I have been in Germany for 10 years and currently study German and English. I am passionate about meeting other cultures and customs, exploring other landscapes, learning other languages, having new experiences, all of which contribute to improving our lives.'"
let Expertise = "Rent me as your Alone24 Buddy for Sporting Events, Family Functions, Giving Tours, Traveling, Going to Beach, Skiing, Snowboarding, , Picnics, Business Events, Personal Advice, Shopping, Going to Park, Wine Tasting, Golfing, , Introducing You To New People, Wingman/Wingwoman, Music, Zoo, Photography, Hot Air Balloon Rides, Hiking, Site Seeing, Bowling, Book Stores, Comedy Shows, Coffee House and much more!";