/* eslint-disable prettier/prettier */
import { KeyboardAvoidingView, StatusBar, StyleSheet, SafeAreaView, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import React from 'react'
import { colors } from '../../services';

const GeneralBase = ({
    children,
    bottomInset = 0,
    topInset,
    refreshControl,
    isFullWidth = false,
    paddingHorizontal = 0,
    paddingBottom,
    marginTop = 0,
    scrollable = false,
    containerStyle,
    style,
    titleStyle,
    ...props
}) => {
    return (
        <SafeAreaView
            edges={['right', 'left']}
            style={{ flex: 1, backgroundColor: colors.background }} >
            <KeyboardAvoidingView
                keyboardShouldPersistTaps="handled"
                style={{ flex: 1, backgroundColor: colors.background }}>
                <View style={{ flex: 1, backgroundColor: colors.background }}>
                    {scrollable ? (
                        <KeyboardAwareScrollView
                            showsVerticalScrollIndicator={false}
                            keyboardShouldPersistTaps="handled"
                            contentContainerStyle={{}}
                            style={{ flex: 1, backgroundColor: colors.background }}>
                            <View>
                                {children}
                            </View>
                            <View style={{ marginBottom: 50 }} />
                        </KeyboardAwareScrollView>
                    ) : (
                        <View
                            style={{ flex: 1, backgroundColor: colors.background }}>
                            {children}
                        </View>
                    )}
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView >

    )
}

export default GeneralBase