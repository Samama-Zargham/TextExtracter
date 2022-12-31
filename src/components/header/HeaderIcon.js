/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, View, Image, Platform } from 'react-native';
import React from 'react';
import { appIcons, colors, GeneralWidth, heightPixel, routes, widthPixel } from '../../services';
import RoundGreenBtn from '../Reusable/RoundGreenBtn';
import { AloneLogo, AloneLogoPNG, NotificationIcon } from '../../assets';
import { useNavigation } from '@react-navigation/native';
import UserProfileWithBorder from '../Reusable/UserProfileWithBorder';
import { getStatusBarHeight } from 'react-native-status-bar-height';


const HeaderIcon = ({ isProfile = true }) => {
    let navigation = useNavigation();
    return (
        <View style={{
            flexDirection: 'row',
            height: heightPixel(65),
            alignItems: 'center',
            ...GeneralWidth,
            marginTop: Platform.OS === 'android' ? getStatusBarHeight(true) + heightPixel(20) : null,
        }}>
            <RoundGreenBtn
                onPress={() => navigation.navigate(routes.dashboard)}
                containerStyle={{ width: "65%" }}
                child={<Image source={appIcons.logo}
                    style={styles.iconStyle} />}
                bkg={colors.white} />
            <View style={{ width: "17.5%" }}>
                {isProfile ? <UserProfileWithBorder
                    onPress={() => navigation.navigate(routes.Profile)}
                    childcontainer={{ alignSelf: "flex-end" }} /> : null}
            </View>
            <RoundGreenBtn
                onPress={() => navigation.navigate(routes.Notifications)}
                childContainer={{ alignSelf: "flex-end" }}
                containerStyle={{ width: "17.5%" }}
                child={<NotificationIcon width={widthPixel(32)} height={heightPixel(32)} />}
                bkg={colors.PrimaryColorBlue} />

        </View>
    );
};

export default HeaderIcon;

const styles = StyleSheet.create({
    iconStyle: {
        width: widthPixel(56), height: widthPixel(56), borderRadius: 100,
    },
});
