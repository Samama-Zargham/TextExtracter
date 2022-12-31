import { View, Text, StatusBar } from 'react-native';
import React, { useEffect } from 'react';
import { COLORS } from '../../Utils/AppStyles';
const Splash = props => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />

      <View style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: COLORS.background
      }} >
        <Text
          style={{ fontSize: 20, fontWeight: "700", marginTop: "80%", color: COLORS.BLACK }}
        >Text Extracter</Text>
      </View>
    </>
  );
};

export default Splash;
