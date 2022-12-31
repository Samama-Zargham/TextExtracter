/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import React from 'react';
import GeneralText from './GeneralText';
import { colors, GeneralWidth, heightPixel, widthPixel } from '../../services';

const LargeMessageBox = ({ onChange, placeholder, top, headText, height }) => {
  let inputRef = React.createRef();
  return (
    <>
      {headText && (
        <GeneralText
          text={headText}
          font={16}
          extraStyle={{
            ...GeneralWidth,
            marginTop: heightPixel(top ? top : 0),
            marginBottom: heightPixel(8)
          }}
        />
      )}
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => inputRef.current.focus()}
        style={[
          styles.Input,
          {
            height: heightPixel(height ? height : 162)
          },
        ]}>
        <TextInput
          ref={inputRef}
          maxLength={320}
          multiline
          style={{ width: widthPixel(370), left: heightPixel(5) }}
          placeholder={placeholder}
          placeholderTextColor={colors.lightGray}
          onChangeText={onChange}
        />
      </TouchableOpacity>
      <GeneralText
        text={"0/120"}
        font={16}
        extraStyle={{
          ...GeneralWidth, marginTop: heightPixel(5)
        }}
      />
    </>
  );
};

export default LargeMessageBox;

const styles = StyleSheet.create({
  Input: {
    alignSelf: 'center',
    borderColor: colors.lightGray,
    borderRadius: 6,
    borderWidth: 1,
    ...GeneralWidth
  },
});
