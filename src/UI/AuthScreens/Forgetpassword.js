import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { COLORS, GeneralWidth } from '../../Utils/AppStyles'
import { Header, PrimaryButton, PrimaryTextInput } from './SignIn'

const Forgetpassword = ({ navigation }) => {
    const [email, setemail] = useState('')
    return (
        <KeyboardAwareScrollView
            keyboardShouldPersistTaps='handled'
            style={{ flex: 1, backgroundColor: COLORS.background }}>

            <Header
                top={30}
                text={"Forgetpassword"}
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

            <PrimaryButton
                // onPress={()=> }
                top={20}
                title="CONTINUE"
            />

        </KeyboardAwareScrollView>
    )
}

export default Forgetpassword
