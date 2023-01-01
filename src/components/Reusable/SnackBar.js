import { Platform, SafeAreaView } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import React from 'react';
import { COLORS, WindowWidth } from '../../Utils/AppStyles';
export const FlashMessage = (message, type) => {
  showMessage({
    message: message,
    icon: 'auto',
    type: type,
    titleStyle: {
      fontSize: 15,
      top: 1.5,
    },
    textStyle: { fontWeight: "800" },
    style: {
      width: WindowWidth,
      borderBottomRightRadius: 5,
      borderBottomLeftRadius: 5,
      alignItems: 'center',
      paddingTop: Platform.OS == "ios" ? 32 : 0,
    },
    animationDuration: 700,
    backgroundColor: type === 'danger' ? 'red' : COLORS.PRIMARY,
  });
}
// FlashMessage("Please Fill The Email or Password", "warning")
// FlashMessage('Welcome Your Are Login Successfully', "success")
// FlashMessage('Email or password is Wrong', "danger")
