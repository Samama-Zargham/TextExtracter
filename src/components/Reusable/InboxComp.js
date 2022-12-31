/* eslint-disable prettier/prettier */
import { StyleSheet, TouchableOpacity, Image, View } from 'react-native'
import React from 'react'
import { colors, dummyUserImage, GeneralWidth, heightPixel, IOSAndroid, widthPixel } from '../../services'
import GeneralText from './GeneralText';
import RoundGreenBtn from './RoundGreenBtn';
import RoundMultipleGreenBtns from './RoundMultipleGreenBtns'
import { ChatIconGray } from '../../assets';
import AnySvg from '../../assets/svgs/Svgs';

const InboxComp = ({ isCreated, onPress, isGrp, top, isNoti = false, isInbox = true }) => {

    return (
        <TouchableOpacity
            onPress={onPress}
            // disabled={true}
            activeOpacity={0.9}
            style={[styles.cardStyle, { marginTop: heightPixel(top ? top : 0) }]}>
            <View style={styles.boxDirection}>
                {isGrp ?
                    <RoundMultipleGreenBtns
                        containerStyle={{ bottom: heightPixel(7) }}
                        child={<Image source={{ uri: dummyUserImage }}
                            style={[styles.ImageStyle1, { position: "absolute", borderColor: colors.PrimaryColorBlue, }]}
                        />}
                        child1={<Image source={{ uri: dummyUserImage }}
                            style={[styles.ImageStyle1, { borderColor: colors.PrimaryColorGreen, }]}
                        />}
                        child2={<Image source={{ uri: dummyUserImage }}
                            style={[styles.ImageStyle1, { borderColor: colors.errorColor, }]}
                        />}
                        bkg={colors.lightGray}
                    />
                    :
                    <RoundGreenBtn
                        child={<Image source={{ uri: dummyUserImage }}
                            style={[styles.ImageStyle, { borderColor: colors.PrimaryColorBlue, }]} />}
                        bkg={colors.lightGray} />
                }
                <View>
                    <GeneralText
                        text={'John Doe'}
                        Color={colors.black}
                        fontWeight={500}
                        font={20}
                        lineHeight={29}
                        extraStyle={{ marginLeft: widthPixel(20), width: widthPixel(250), alignSelf: 'center', }}
                    />
                    <GeneralText
                        text={'Will meet you at the Location'}
                        fontWeight={400}
                        font={12}
                        lineHeight={14}
                        extraStyle={{ marginLeft: widthPixel(20), width: widthPixel(250), alignSelf: 'center', }}
                    />

                </View>
                {isInbox && isGrp ?
                    <View style={styles.redBox}>
                        <GeneralText
                            text={'1'}
                            font={10}
                            fontWeight={600}
                            Color={colors.white}
                        />
                    </View>
                    :
                    null
                }
                {
                    !isInbox &&
                    <ChatIconGray
                        width={widthPixel(26)}
                        height={heightPixel(26)} />
                }
                {isNoti ? <AnySvg name={ChatIconGray} width={27} height={27} /> : null}
            </View>
            {isNoti == false && isInbox &&
                <GeneralText
                    text={'20:01'}
                    fontWeight={400}
                    font={12}
                    extraStyle={{ alignSelf: "flex-end", right: heightPixel(21), position: "absolute", top: heightPixel(70) }}
                />
            }

        </TouchableOpacity>
    )
}

export default InboxComp

const styles = StyleSheet.create({
    cardStyle: {
        ...GeneralWidth,
        height: heightPixel(96),
        backgroundColor: colors.white,
        ...IOSAndroid.elevation5, borderRadius: 6,
        bottom: heightPixel(2)
    },
    ImageStyle: {
        borderWidth: 1.5,
        width: widthPixel(62),
        height: widthPixel(62),
        borderRadius: 100,
    },
    ImageStyle1: {
        borderWidth: 1.5,
        width: widthPixel(35),
        height: widthPixel(36),
        borderRadius: 100,
    },
    boxDirection: {
        flexDirection: 'row',
        padding: heightPixel(20), alignItems: "center"
    },
    redBox: {
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#E31717',
        width: widthPixel(20),
        height: widthPixel(20),
        backgroundColor: colors.textRed,
        borderRadius: widthPixel(16)
    }
})