import {
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import React from 'react';
import { COLORS, fontFamily } from '../../Utils/Config';
import { heightPixel, widthPixel } from '../../Utils/Responsiveness';
import LinearGradient from 'react-native-linear-gradient';
import { IOSAndroid } from '../../Utils/AppStyles';


const Box = ({ text, onPress, value }) => {

  return (
    <LinearGradient colors={value == text ? [COLORS.PRIMARY_Blue, COLORS.PRIMARY_Red] : [COLORS.WHITE, COLORS.PRIMARY_Red]}
      style={
        {
          width: "45%",
          height: heightPixel(170),
          borderRadius: 10,
        }
      }
      start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.0 }}>
      <Pressable
        onPress={() => {
          onPress(text)
        }}
        style={[styles.boxStyle, { borderWidth: value == text ? 1 : 0 }]}>
        <Text
          style={{ fontSize: 21, color: COLORS.textColor, fontFamily: fontFamily[600] }}>
          {text}
        </Text>
      </Pressable>
    </LinearGradient>

  );
};

export default Box;

const styles = StyleSheet.create({
  boxStyle: {
    width: "98%",
    height: "98%",
    shadowColor: '#000',
    borderRadius: 10,
    ...IOSAndroid.elevation10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS,
    backgroundColor: "white"
  }
});
