/* eslint-disable prettier/prettier */
import { StyleSheet, Text, TouchableWithoutFeedback, View, Modal, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import {
  colors,
  fontFamilyRoboto,
  fontPixel,
  generalROW,
  GeneralWidth,
  heightPixel,
  routes,
  widthPixel,
} from '../../services';
import { AloneLogo, CongratsThumbsUp, EmailIcon, PhoneIcon } from '../../assets';
import GeneralText from './GeneralText';
import HaveAccount from './HaveAccount';
import { GrayLine } from './GrayLine';
import { AuthContext } from '../../ContextApi/ProviderUseContextApi';
import PrimaryButton from '../button/PrimaryButton';

const SuccessPopup = ({ SuccessTitle, SuccessDetail, btncontainerStyle, addedtoCalender = true, goToHome, height, goNext, selectIcon, modalvisible }) => {
  const [added, setadded] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      goNext && goNext();
    }, 2000);
  });

  return (
    <Modal animationType="fade" transparent={true} visible={modalvisible}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          width: '100%',
          justifyContent: 'center',
        }}>
        <View style={[styles.ModalView, { height: heightPixel(height ? height - 10 : 360), }]}>
          <View
            style={{
              marginVertical: 19,
              justifyContent: 'center',
            }}>
            <Icon selectIcon={selectIcon ? selectIcon : "congrats"} />
          </View>
          <Text style={[styles.SuccessTitle, SuccessTitle == "Request Declined" && { color: colors.errorColor }]}>
            {SuccessTitle ? SuccessTitle : "Congratulations!"}
          </Text>
          <Text style={styles.SuccessDetail}>
            {SuccessDetail ? SuccessDetail : "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          </Text>
          {goToHome &&
            <>
              {addedtoCalender ? <Text
                onPress={() => setadded(true)}
                style={styles.addedToCalender}>
                {addedtoCalender && !added ? "Add to Calendar" : "Added to Calendar"}</Text>
                :
                <View style={{ marginTop: 15 }} />}
              <PrimaryButton
                containerStyle={btncontainerStyle}
                onPress={goToHome}
                width={280}
                title={"BACK TO HOMEPAGE"}
              />
            </>
          }
        </View>
      </View>
    </Modal>
  );
};
const Icon = ({ selectIcon }) => {
  if (selectIcon == 'congrats') {
    return (
      <CongratsThumbsUp width={widthPixel(200)} height={heightPixel(180)} />
    );
  } else if (selectIcon == 'emailicon') {
    return <EmailIcon width={widthPixel(30)} height={heightPixel(30)} />;;
  } else if (selectIcon == 'phoneicon') {
    return <PhoneIcon width={widthPixel(30)} height={heightPixel(30)} />;;
  }
};;

export const ChooseVerifyType = ({ nav, modalvisible, setmodalvisible }) => {
  const { userverifyType } = React.useContext(AuthContext);
  const [verifyType, setverifyType] = userverifyType;;

  let onPressEmail = () => {
    setverifyType('email');
    setmodalvisible(false);;
    nav.navigate(routes.verifycode);;
  };;
  let onPressPhone = () => {
    setverifyType('phone');
    setmodalvisible(false);;
    nav.navigate(routes.enterPhone);;
  };;

  return (
    <Modal animationType="fade" transparent={true} visible={modalvisible}>
      <TouchableWithoutFeedback onPress={() => setmodalvisible(false)}>
        <View style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }} />
      </TouchableWithoutFeedback>
      <View style={styles.ModalView1}>
        <AloneLogo width={55} height={55} />
        <GeneralText
          text={'Choose method of verification'}
          Color={colors.black}
          font={20}
          lineHeight={22}
          extraStyle={{ marginTop: heightPixel(10) }}
        />
        <HaveAccount
          text1={'To continue to'}
          text2={'ALONE24'}
          secondColor={colors.PrimaryColorGreen}
          isTop={false}
        />
        <IconRow
          onPress={onPressEmail}
          selectIcon={'emailicon'}
          rowText="Email Address"
        />
        <IconRow
          selectIcon={'phoneicon'}
          onPress={onPressPhone}
          rowText="Phone number"
        />
      </View>
    </Modal>
  );;
};;

const IconRow = ({ rowText, selectIcon, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{ width: '100%', marginLeft: '14%', marginTop: 10 }}>
      <View
        style={{
          width: '52%',
          marginVertical: 5,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Icon selectIcon={selectIcon} />
        <GeneralText
          text={rowText}
          Color={colors.textColor}
          font={16}
          lineHeight={24}
          extraStyle={{ marginLeft: 10 }}
        />
      </View>
      <GrayLine width={'86%'} />
    </TouchableOpacity>
  );;
};;

export default SuccessPopup;

const styles = StyleSheet.create({
  ModalView: {
    backgroundColor: 'white',
    alignSelf: 'center',
    width: widthPixel(330),
    height: heightPixel(350),
    margin: '18%',
    borderRadius: 5,
    alignItems: 'center',
  },
  ModalView1: {
    backgroundColor: 'white',
    alignSelf: 'center',
    width: widthPixel(339),
    height: heightPixel(355),
    margin: '18%',
    borderRadius: 5,
    alignItems: 'center',
    top: "20%",
  },
  addedToCalender: {
    fontSize: fontPixel(17),
    lineHeight: heightPixel(24),
    color: colors.PrimaryColorBlue,
    fontFamily: fontFamilyRoboto[600],
    marginVertical: 5,
    marginBottom: 10
  },
  SuccessTitle: {
    fontSize: 17,
    fontFamily: fontFamilyRoboto[500],
    color: colors.darkTextColor,
    lineHeight: 27,
  },
  SuccessDetail: {
    color: colors.textColor,
    fontSize: 13.5,
    fontFamily: fontFamilyRoboto[400],
    textAlign: 'center',
    marginTop: 5
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
