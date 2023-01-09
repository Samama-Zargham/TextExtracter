import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { COLORS, GeneralWidth } from '../../Utils/AppStyles'
import { Header, PrimaryButton, PrimaryTextInput } from './SignIn'
import Loader from '../../components/Reusable/Loader'
import { UserSignUp } from '../../Firebase/EmailSignUp'
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { loginWithGoogle } from '../../Firebase/Login'

const SignUp = ({ navigation }) => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [confirmpassword, setconfirmpassword] = useState('')
    const [loading, setloading] = useState(false)
    const [isSigninInProgress, setisSigninInProgress] = useState(false)

    const handleSignUp = () => {

        UserSignUp(
            email,
            password,
            confirmpassword,
            () => { navigation.navigate("SignIn") },
            setloading
        )
    }
    return (
        <KeyboardAwareScrollView
            keyboardShouldPersistTaps='handled'
            style={{ flex: 1, backgroundColor: COLORS.background }}>

            <Header
                top={30}
                text={"SignUp"}
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
                top={5}
                bottom={20}
                placeholder={"Enter your password"}
                value={password}
                onChange={setpassword}
                headText="Password"
            />
            <PrimaryTextInput
                bottom={5}
                top={5}
                placeholder={"Enter your confirm password"}
                value={confirmpassword}
                onChange={setconfirmpassword}
                headText="Confirm Password"
            />
            <PrimaryButton
                onPress={handleSignUp}
                top={20}
                title="SIGN UP"
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
                Already have an account?<Text
                    onPress={() => navigation.navigate("SignIn")}
                    style={{
                        color: COLORS.PRIMARY,
                        fontSize: 13,
                        fontWeight: "500",
                        marginRight: 18
                    }}>
                    {"  SING IN"}
                </Text>
            </Text>
            <GoogleSigninButton
                style={{ width: 192, height: 56, alignSelf: "center", marginTop: 35 }}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Light}
                onPress={() =>
                    loginWithGoogle(
                        setisSigninInProgress,
                        (data) => dispatch(userData(data))
                    )
                }
                disabled={isSigninInProgress}
            />
            <Loader loading={loading} />
        </KeyboardAwareScrollView>
    )
}

export default SignUp
