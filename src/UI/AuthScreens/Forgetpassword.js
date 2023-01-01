import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { COLORS, GeneralWidth } from '../../Utils/AppStyles'
import { Header, PrimaryButton, PrimaryTextInput } from './SignIn'
import { ForgetLink } from '../../Firebase/ForgetLink'
import Loader from '../../components/Reusable/Loader'

const Forgetpassword = ({ navigation }) => {
    const [email, setemail] = useState('')
    const [loading, setloading] = useState(false)
    const handleForget = () => {

        ForgetLink(
            email,
            navigation,
            setloading
        )
    }

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
                onPress={handleForget}
                top={20}
                title="CONTINUE"
            />
            <Loader loading={loading} />
        </KeyboardAwareScrollView>
    )
}

export default Forgetpassword
