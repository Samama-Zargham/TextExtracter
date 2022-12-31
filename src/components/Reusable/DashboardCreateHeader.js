/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AnySvg from '../../assets/svgs/Svgs'
import { colors, GeneralWidth, heightPixel, IOSAndroid, widthPixel } from '../../services'
import GeneralText from './GeneralText'
import { GrayLine } from './GrayLine'

const DashboardCreateHeader = ({
    Icon,
    title,
    Color,
    fillLength = [1]
}) => {
    return (
        <View style={styles.mainView}>
            <View style={{ flexDirection: "row", alignItems: "center", alignSelf: "center" }}>
                <AnySvg name={Icon} height={40} width={40} />
                <GeneralText
                    text={title}
                    Color={Color}
                    font={20}
                    fontWeight={500}
                    lineHeight={24}
                    extraStyle={{ left: 15 }}
                />
            </View>
            <View style={styles.slider}>
                <RoundIcon title={1} bkg={fillLength?.length > 0 && Color} />
                <GrayLine width={24} extraStyle={styles.grayLineExtraStyle} />
                <RoundIcon title={2} bkg={fillLength?.length > 1 && Color} />
                <GrayLine width={24} extraStyle={styles.grayLineExtraStyle} />
                <RoundIcon title={3} bkg={fillLength?.length > 2 && Color} />
                <GrayLine width={24} extraStyle={styles.grayLineExtraStyle} />
                <RoundIcon title={4} bkg={fillLength?.length > 3 && Color} />
                <GrayLine width={24} extraStyle={styles.grayLineExtraStyle} />
                <RoundIcon title={5} bkg={fillLength?.length > 4 && Color} />
            </View>
        </View>
    )
}
const RoundIcon = ({ title, bkg }) => {
    return (
        <View style={[
            bkg ? [styles.fill, { backgroundColor: bkg }] : [styles.fill, styles.notFill]
        ]}>
            <GeneralText
                font={20}
                lineHeight={21}
                text={title}
                Color={bkg ? colors.white : colors.textColor}
            />
        </View>
    )
}
export default DashboardCreateHeader

const styles = StyleSheet.create({
    mainView: {
        ...GeneralWidth,
        height: heightPixel(140),
        ...IOSAndroid.elevation3,
        borderRadius: 6,
        backgroundColor: colors.white,
        justifyContent: "center",
        marginTop: 25,
        marginBottom: 2
    },
    slider: {
        flexDirection: "row",
        alignItems: "flex-end",
        alignSelf: "center",
        justifyContent: "space-between",
        marginTop: heightPixel(15)
    },
    fill: {
        width: widthPixel(32),
        height: heightPixel(32),
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
    },
    notFill: {
        borderWidth: 1.5,
        borderColor: colors.lightGray
    },
    grayLineExtraStyle: {
        bottom: heightPixel(15)
    }
})