import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { COLORS, GeneralWidth } from '../../Utils/AppStyles'
import { useDispatch } from 'react-redux'
import { userData } from '../../Redux/reducers'

const SignIn = ({ navigation }) => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    let dispatch = useDispatch();
    const handleSignIn = () => {
        dispatch(userData({ data: "user " }))
    }
    return (
        <KeyboardAwareScrollView
            keyboardShouldPersistTaps='handled'
            style={{ flex: 1, backgroundColor: COLORS.background }}>

            <Header
                top={30}
                text={"SignIn"}
                bottom={50}
            />
            <PrimaryTextInput
                top={5}
                bottom={20}
                placeholder={"Enter your email"}
                value={email}
                onChange={setemail}
                headText="Email"
            />
            <PrimaryTextInput
                bottom={5}
                top={5}
                placeholder={"Enter your password"}
                value={password}
                onChange={setpassword}
                headText="Password"
            />
            <Text
                onPress={() => navigation.navigate("Forgetpassword")}
                style={{
                    color: COLORS.PRIMARY,
                    fontSize: 12,
                    fontWeight: "500",
                    alignSelf: "flex-end",
                    marginRight: 18
                }}>
                {"forget password?"}
            </Text>
            <PrimaryButton
                onPress={handleSignIn}
                top={20}
                title="SIGN IN"
            />
            <Text
                style={{
                    color: COLORS.textColor,
                    fontSize: 13,
                    fontWeight: "500",
                    marginRight: 18,
                    alignSelf: "center",
                    marginTop: 50
                }}>
                Don’t have an account?<Text
                    onPress={() => navigation.navigate("SignUp")}
                    style={{
                        color: COLORS.PRIMARY,
                        fontSize: 13,
                        fontWeight: "500",
                        marginRight: 18
                    }}>
                    {"  SING UP"}
                </Text>
            </Text>
        </KeyboardAwareScrollView>
    )
}
export const Header = ({ text, top, bottom, fontSize }) => {
    return (
        <Text style={{
            color: COLORS.textColor,
            fontSize: fontSize ? fontSize : 25,
            width: "90%",
            alignSelf: "center",
            fontWeight: "500",
            marginTop: top ? top : 0,
            marginBottom: bottom ? bottom : 0
        }}>
            {text}
        </Text>
    )
}
export const PrimaryTextInput = ({
    isSecure = false,
    onPress,
    onChange,
    disabled = false,
    placeholder,
    top,
    bottom,
    value,
    maxLength,
    headText
}) => {
    return (
        <>
            <Header fontSize={14} text={headText} />
            <View style={[styles.Input, {
                width: "92%",
                marginTop: top ? top : 0,
                marginBottom: bottom ? bottom : 0,
            }]} >
                <TextInput
                    numberOfLines={1}
                    maxLength={maxLength ? maxLength : 1000}
                    editable={!disabled}
                    style={{
                        height: 50,
                        color: COLORS.defaultText,
                        marginLeft: 5
                    }}
                    placeholder={placeholder}
                    placeholderTextColor={COLORS.defaultText}
                    onChangeText={onChange}
                    onPressIn={onPress}
                    secureTextEntry={isSecure}
                    value={value}
                />
            </View>
        </>
    )
}
export const PrimaryButton = ({ top, bottom, width, disable, titleColor, bkg, fontSize, containerStyle, onPress, title }) => {

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            disabled={disable}
            style={[{
                justifyContent: "center",
                alignItems: "center",
                width: "90%",
                height: 50,
                backgroundColor: bkg ? bkg : COLORS.PRIMARY,
                alignSelf: 'center',
                borderRadius: 4,
                marginTop: top ? top : 0,
                marginBottom: bottom ? bottom : 0
            }, containerStyle && containerStyle]}
            onPress={onPress}>
            <Text style={{
                color: titleColor ? titleColor : COLORS.WHITE,
                fontSize: fontSize ? fontSize : 20,
                alignSelf: "center",
                fontWeight: "500",
            }}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}
export default SignIn
const styles = StyleSheet.create({
    Input: {
        width: "90%",
        alignSelf: "center",
        borderWidth: 1,
        borderColor: "gray",
        height: 50,
        borderRadius: 4,
        color: COLORS.defaultText,
    },
})  