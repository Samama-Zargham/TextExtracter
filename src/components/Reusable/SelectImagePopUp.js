/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, Image, TouchableWithoutFeedback, View, Modal, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import {
    colors,
    fontFamilyRoboto,
    fontPixel,
    generalROW,
    GeneralWidth,
    heightPixel,
    IOSAndroid,
    routes,
    widthPixel,
} from '../../services';
import GeneralText from './GeneralText';
import { AuthContext } from '../../ContextApi/ProviderUseContextApi';
import AnySvg, * as SVG from '../../assets/svgs/Svgs';
import { ImageFromGallrey } from '../../services/MyCommon/Common';
import BaseModal from './Modal/BaseModal';

const SelectImagePopUp = ({ setmodalvisible, modalvisible, profile, setprofile }) => {
    const handleOnPress = (item, index) => {
        index != 5 ?
            (
                setprofile({ path: item }),
                setmodalvisible(false)
            )
            :
            (
                ImageFromGallrey(setprofile),
                setmodalvisible(false)
            )
    }
    return (
        <BaseModal
            modalvisible={modalvisible}
            setmodalvisible={setmodalvisible}
        >
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                }}
            >
                {
                    images.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            style={{ height: heightPixel(160) }}
                            activeOpacity={0.9}
                            onPress={() => handleOnPress(item, index)}
                        >
                            <View style={{ alignItems: "center" }}>
                                <View style={[
                                    styles.imgStyle,
                                    { ...IOSAndroid.elevation2, marginTop: index < 3 ? 32 : 15 }
                                ]}>
                                    {index != 5 ? <Image
                                        style={styles.imgStyle}
                                        source={{ uri: item }}
                                    /> :
                                        <AnySvg
                                            disabled={true}
                                            width={40}
                                            height={40}
                                            name={SVG.AddProfileIcon}
                                            style={{ marginTop: heightPixel(20) }}
                                        />
                                    }
                                </View>
                                <GeneralText
                                    text={index != 5 ? "Scene" : "Upload"}
                                    Color={index != 5 ? colors.darkTextColor : colors.PrimaryColorGreen}
                                    font={16}
                                    lineHeight={24}
                                    fontWeight={500}
                                    extraStyle={{ marginTop: 5 }}
                                />
                                {
                                    profile &&
                                    profile?.path == item
                                    &&
                                    <View
                                        style={[styles.imgStyle,
                                        {
                                            backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                            position: "absolute",
                                            marginTop: index < 3 ? 32 : 15,
                                            justifyContent: "center"
                                        }]}>
                                        <AnySvg
                                            disabled={true}
                                            width={20}
                                            height={20}
                                            name={SVG.TickIcon}
                                        />
                                    </View>
                                }
                            </View>
                        </TouchableOpacity>
                    ))
                }

            </View>

        </BaseModal>
    )
}

export default SelectImagePopUp

const styles = StyleSheet.create({
    imgStyle: {
        width: widthPixel(80),
        height: heightPixel(80),
        borderRadius: 12,
        backgroundColor: colors.lightGray
    }
})

let images = [
    "https://images.unsplash.com/photo-1490077476659-095159692ab5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2NlbmV8ZW58MHx8MHx8&w=1000&q=80",
    "https://images.pexels.com/photos/1569012/pexels-photo-1569012.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://www.teahub.io/photos/full/94-949792_high-definition-quality-desktop-wallpapers-beautiful-sunset-waterfall.jpg",
    "https://www.wikihow.com/images/thumb/5/58/Draw-a-Beach-Scene-Step-11.jpg/aid1501397-v4-1200px-Draw-a-Beach-Scene-Step-11.jpg",
    "https://www.nation.com.pk/print_images/extra-large/2021-11-28/rare-hunting-scene-raises-questions-over-polar-bear-diet-1638123983-5841.jpg",
    "s"
]