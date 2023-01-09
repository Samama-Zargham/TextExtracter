/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import React from 'react';
import { COLORS, GeneralWidth } from '../../Utils/AppStyles';

const LargeMessageBox = ({ onChange, placeholder, value, top, height }) => {
  let inputRef = React.createRef();
  return (
    <>

      <TouchableOpacity
        activeOpacity={1}
        onPress={() => inputRef.current.focus()}
        style={[
          styles.Input,
          {
            height: height ? height : 160,
            marginTop: top ? top : 20
          },
        ]}>
        <TextInput
          ref={inputRef}
          maxLength={320}
          multiline
          style={{ width: "70%", color: COLORS.BLACK }}
          placeholder={placeholder}
          placeholderTextColor={COLORS.lightGray}
          onChangeText={onChange}
          value={value}
        />
      </TouchableOpacity>
    </>
  );
};

export default LargeMessageBox;

const styles = StyleSheet.create({
  Input: {
    alignSelf: 'center',
    borderColor: COLORS.lightGray,
    borderRadius: 6,
    borderWidth: 1,
    ...GeneralWidth
  },
});
