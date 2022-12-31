/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ActiveDot, NonActiveDot, ONBOARD1 } from '../../assets';
import {
    colors,
    fontFamilyRoboto,
    fontPixel,
    heightPixel,
    hp,
    widthPixel,
} from '../../services';
import GeneralText from './GeneralText';
import RoundGreenBtn from './RoundGreenBtn';
import PrimaryButton from '../button/PrimaryButton';

const onBoardLorem =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.';

const OnBoardingComponent = ({
    BackgroundVector,
    isSkip = false,
    heading,
    dots,
    skipPress,
    onPressNext,
}) => {
    const navigation = useNavigation();

    return (
        <View style={{ marginTop: heightPixel(120), alignItems: 'center' }}>
            <View style={{ marginBottom: heightPixel(60) }}>
                <BackgroundVector />
            </View>
            <View
                style={{
                    backgroundColor: colors.white,
                    height: heightPixel(420),
                    width: '100%',
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                }}>
                <Text
                    style={{
                        fontFamily: fontFamilyRoboto.BebasNeueRegular,
                        color: colors.black,
                        fontSize: fontPixel(36),
                        textAlign: 'center',
                        marginVertical: heightPixel(20),
                    }}>
                    {heading}
                </Text>
                <GeneralText
                    text={onBoardLorem}
                    font={16}
                    extraStyle={{
                        textAlign: 'center',
                        width: widthPixel(339),
                        alignSelf: 'center',
                    }}
                />
                {isSkip ? (
                    <View
                        style={{
                            alignItems: 'center',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingHorizontal: widthPixel(20),
                            marginTop: heightPixel(40),
                        }}>
                        <Text
                            onPress={skipPress}
                            style={{
                                fontFamily: fontFamilyRoboto[500],
                                color: colors.textColor,
                                fontSize: fontPixel(23),
                                textAlign: 'center',
                            }}>
                            {'Skip'}
                        </Text>
                        <RoundGreenBtn onPress={onPressNext} bkg={colors.PrimaryColorGreen} />
                    </View>
                ) : (
                    <PrimaryButton
                        containerStyle={{ marginTop: heightPixel(40) }}
                        title="CONTINUE"
                        onPress={onPressNext}
                    />
                )}
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        alignSelf: 'center',
                        marginTop: heightPixel(50),
                    }}>
                    {dots == '100' ? (
                        <>
                            <ActiveDot width={widthPixel(38)} height={heightPixel(16)} />
                            <NonActiveDot width={widthPixel(20)} height={heightPixel(16)} />
                            <NonActiveDot width={widthPixel(20)} height={heightPixel(16)} />
                        </>
                    ) : dots == '010' ? (
                        <>
                            <NonActiveDot width={widthPixel(20)} height={heightPixel(16)} />
                            <ActiveDot width={widthPixel(38)} height={heightPixel(16)} />
                            <NonActiveDot width={widthPixel(20)} height={heightPixel(16)} />
                        </>
                    ) : (
                        <>
                            <NonActiveDot width={widthPixel(20)} height={heightPixel(16)} />
                            <NonActiveDot width={widthPixel(20)} height={heightPixel(16)} />
                            <ActiveDot width={widthPixel(38)} height={heightPixel(16)} />
                        </>
                    )}
                </View>
            </View>
        </View >
    );
};

export default OnBoardingComponent;
