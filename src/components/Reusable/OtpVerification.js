import React, { useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { colors, heightPixel, IOSAndroid, widthPixel } from '../../services';

const styles = StyleSheet.create({
    root: { width: "70%", alignSelf: "center" },
    cell: {
        width: widthPixel(55),
        height: heightPixel(60),
        borderRadius: 5,
        backgroundColor: colors.white,
        justifyContent: "center",
        borderWidth: 0.5,
        borderColor: colors.lightGray,
        marginVertical: 20,
    },
    cellText: {
        color: colors.textColor,
        fontSize: 20,
        textAlign: 'center',
    }
});

const CELL_COUNT = 4;

const OtpVerification = ({ value, setValue, isPin }) => {
    const [enableMask, setEnableMask] = useState(isPin == true ? true : false);
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });

    const toggleMask = () => setEnableMask((f) => !f);

    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    return (
        <SafeAreaView style={styles.root}>
            <CodeField
                ref={ref}
                {...props}
                value={value}
                onChangeText={(e) => setValue(e)}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({ index, symbol, isFocused }) => {
                    if (index == 0) isFocused = true
                    let text = null;

                    if (symbol) {
                        text = enableMask ? '•' : symbol;
                    } else if (isFocused) {
                        text = <Cursor />;
                    }

                    return (
                        <View key={index} style={styles.cell}>
                            <Text
                                style={[styles.cellText, isFocused && styles.focusCell, isPin == true && { elevation: 5 }]}
                                onLayout={getCellOnLayoutHandler(index)}>
                                {text || (isFocused ? <Cursor /> : null)}
                            </Text>
                        </View>

                    )
                }}
            />
            {/* <Text style={styles.toggle} onPress={toggleMask}>
                {enableMask ? '🙈' : '🐵'}
            </Text> */}
        </SafeAreaView>
    );
};

export default OtpVerification;