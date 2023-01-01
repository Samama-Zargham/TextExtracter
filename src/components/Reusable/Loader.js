/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import Spinner from 'react-native-spinkit';
import * as React from 'react';
import { Modal, View, Text, ActivityIndicator } from 'react-native';
import { COLORS } from '../../Utils/AppStyles';

const Loader = ({ loading, lodingtxt }) => {
  return (
    <Modal
      transparent={true}
      visible={loading}
    >
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Spinner color={COLORS.WHITE} type="Bounce" size={80} />
        <Spinner color={COLORS.WHITE} type="Pulse" size={80} style={{ position: "absolute" }} />
        <Text
          style={{
            color: COLORS.redColor,
            fontSize: 12,
            textAlign: 'center',
            position: "absolute",
            fontWeight: "500"
          }}>
          {lodingtxt != undefined ? lodingtxt : 'Loading'}
        </Text>
      </View>
    </Modal>
  );
};

export const LoaderIndicator = ({ loading }) => (
  loading ? <ActivityIndicator color={COLORS.PRIMARY} size={25} /> : null
)
export default Loader;
