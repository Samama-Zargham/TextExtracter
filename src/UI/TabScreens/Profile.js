import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../Utils/AppStyles'
import { Header, PrimaryButton, PrimaryTextInput } from '../AuthScreens/SignIn'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import auth from '@react-native-firebase/auth';
import { useDispatch } from 'react-redux'
import { logOut } from '../../Redux/reducers'

const Profile = () => {
    const [name, setname] = useState('')
    const [age, setage] = useState('')
    const [profession, setprofession] = useState('')
    let dispatch = useDispatch()
    return (
        <KeyboardAwareScrollView
            keyboardShouldPersistTaps='handled'
            style={{ flex: 1, backgroundColor: COLORS.WHITE }}>
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "90%",
                alignSelf: "center",
                marginVertical: "10%"
            }} >
                <Header
                    width={"25%"}
                    text={"Profile"}
                    color={COLORS.PRIMARY}
                />
                <PrimaryButton
                    onPress={() => {
                        auth().signOut()
                        dispatch(logOut())
                    }}
                    height={30}
                    width={"30%"}
                    fontSize={15}
                    title={"Log Out"}
                />
            </View>
            <PrimaryTextInput
                bottom={20}
                top={5}
                placeholder={"Enter your name"}
                value={auth().currentUser.email}
                headText="Email"
                disabled={true}
            />
            <PrimaryTextInput
                bottom={20}
                top={5}
                placeholder={"Enter your name"}
                value={name}
                onChange={setname}
                headText="Name"
            />
            <PrimaryTextInput
                bottom={20}
                top={5}
                placeholder={"Enter your age"}
                value={age}
                onChange={setage}
                headText="Age"
            />
            <PrimaryTextInput
                bottom={20}
                top={5}
                placeholder={"Enter your profession"}
                value={profession}
                onChange={setprofession}
                headText="Profession"
            />

        </KeyboardAwareScrollView>
    )
}

export default Profile

const styles = StyleSheet.create({})