/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import GeneralText from '../text/GeneralText';
import {
  heightPixel,
  pixelSizeVertical,
  widthPixel,
} from '../../Utils/Responsiveness';
import { useNavigation } from '@react-navigation/native';
import AnyIcon, { Icons } from '../Resuseables/AnyIcon';
import { COLORS, fontFamily } from '../../Utils/AppStyles';

const AuthHeader = ({ text, btnTitle, isTextIcon, isDots, isRightIcon, onPressRightIcon, isRightIcon1, isLeftIcon, OneLine, isDrawer, isDrawerHome }) => {
  let navigation = useNavigation();
  let backIcon = require('../../assets/images/BackIcon.png');
  let drawerIcon = require('../../assets/images/DrawerIcon.png');
  let CrossIcon = require('../../assets/images/CrossIcon.png');
  let LEFTICON = isDrawer ? drawerIcon : isDrawerHome ? CrossIcon : backIcon;

  let onPressBellIcon = () => navigation.navigate("Notifications")
  let rightIconPress = isTextIcon || isDots ? onPressRightIcon : onPressBellIcon
  let onPressInboxChat = () => navigation.navigate("Inbox")


  const RightIcon1 = () => (
    <AnyIcon
      onPress={onPressInboxChat}
      type={Icons.Feather}
      name={'message-circle'}
      color={COLORS.BLACK}
      size={25}
      style={styles.iconStyle1}
    />
  );
  const RightIcon = () => (
    isTextIcon ?
      <Text onPress={rightIconPress} style={
        [styles.iconStyle, { color: COLORS.textColor, fontFamily: fontFamily[400], fontSize: 16 }]
      }>{btnTitle ? btnTitle : "Address"}</Text>
      :
      isDots ?
        <AnyIcon
          onPress={rightIconPress}
          type={Icons.Entypo}
          name={'dots-three-vertical'}
          color={COLORS.BLACK}
          size={20}
          style={styles.iconStyle}
        />
        :
        <AnyIcon
          onPress={rightIconPress}
          type={Icons.Feather}
          name={'bell'}
          color={COLORS.BLACK}
          size={25}
          style={styles.iconStyle}
        />
  );
  return (
    <View style={{ height: heightPixel(52) }}>
      <View
        style={
          {
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
            paddingVertical: 10,
          }
        }>

        <TouchableOpacity
          disabled={isLeftIcon == true ? false : true}
          onPress={() =>
            isDrawer ? navigation.navigate('DrawerNav') : navigation.goBack()
          }
          style={{
            flex: 0.47,
            paddingVertical: 2,
          }}
          activeOpacity={0.7}>
          {isLeftIcon == true && <Image
            resizeMode="contain"
            style={{ width: widthPixel(24), left: widthPixel(18), height: heightPixel(24) }}
            source={LEFTICON}
          />}
        </TouchableOpacity>

        <View style={{ flex: 1 }}>
          <GeneralText
            text={text}
            fontWeight={500}
            OneLine={OneLine}
            font={20}
            lineHeight={heightPixel(30)}
            extraStyle={{ textAlign: 'center' }}
          />
        </View>
        {!isTextIcon && <TouchableOpacity
          disabled={isRightIcon1 == true ? false : true}
          onPress={() => { }
          }
          style={{
            flex: 0.25,
            paddingVertical: 2,
          }}
          activeOpacity={0.7}>
          {isRightIcon1 == true && <RightIcon1 />}
        </TouchableOpacity>}
        <TouchableOpacity
          disabled={isRightIcon == true ? false : true}
          onPress={() => { }}
          style={{
            flex: isTextIcon ? 0.48 : 0.22,
            paddingVertical: 2,
          }}
          activeOpacity={0.7}>
          {isRightIcon == true && <RightIcon />}
        </TouchableOpacity>
      </View>
    </View>

  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  iconStyle: {
    alignSelf: 'flex-end', right: widthPixel(17),
  },
  iconStyle1: {
    alignSelf: 'flex-end', right: widthPixel(9),
  },
});
