import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import { colors, fontFamily, wp } from '../../services'

const Button = props => {
    const { style, disable, containerStyle, onPress, themeColor, payoutButton, bidButton, shadow, children } = props

    return (
        <View style={styles.topContainer}>
            <TouchableOpacity
                disabled={disable}
                style={[shadow && styles.shadow,
                {
                    ...styles.container,
                    ...containerStyle,

                    borderRadius: payoutButton ? 12 : bidButton ? 10 : 30,
                    backgroundColor: themeColor ? themeColor : colors.theme
                }]}
                onPress={onPress}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ ...styles.label, ...style, }}>
                        {children}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    topContainer: {
        marginBottom: wp(5)
    },
    container: {
        width: '100%',
        height: 48,
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center',

    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    label: {
        color: colors.white,
        fontFamily: fontFamily.appTextSemiBold,
        fontSize: 16
    },

})

export default Button
