/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, Image, TouchableWithoutFeedback, View, Modal, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { heightPixel, widthPixel } from '../../../services';



const BaseModal = ({
    width = 350,
    height = 320,
    setmodalvisible,
    modalvisible,
    children
}) => {
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

            <View style={{
                backgroundColor: 'white',
                alignSelf: 'center',
                width: widthPixel(350),
                height: heightPixel(320),
                margin: '18%',
                borderRadius: 15,
                alignItems: 'center',
                padding: heightPixel(32),
                justifyContent: "center",
                marginTop: "60%"
            }}>
                {children}
            </View>
        </Modal>
    )
}

export default BaseModal

const styles = StyleSheet.create({})