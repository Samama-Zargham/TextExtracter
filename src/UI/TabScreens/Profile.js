import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../Utils/AppStyles'
import { Header, PrimaryButton, PrimaryTextInput } from '../AuthScreens/SignIn'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import auth from '@react-native-firebase/auth';
import { useDispatch, useSelector } from 'react-redux'
import { logOut, userData } from '../../Redux/reducers'
import { useFocusEffect } from '@react-navigation/native'
import { UpdateDoc } from '../../Firebase/Updatedoc'

const Profile = () => {
    const usersData = useSelector(state => state.users.userData);
    console.log("first==>>>  ", usersData)
    const [name, setname] = useState(usersData?.name)
    const [age, setage] = useState(usersData?.age)
    const [profession, setprofession] = useState(usersData?.profession)
    const [isName, setisName] = useState(false)
    const [isAge, setisAge] = useState(false)
    const [isProfession, setisProfession] = useState(false)

    let dispatch = useDispatch()
    useFocusEffect(
        React.useCallback(() => {

        }, [])
    )
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
                isSave={isName}
                setisSave={setisName}
                disabled={!isName}
                isSaveIcon={true}
                placeholder={"Enter your name"}
                value={name}
                onChange={setname}
                headText="Name"
                maxLength={20}
                onPress={() => UpdateDoc("name", name, () => dispatch(userData({ ...usersData, name: name })))}
            />
            <PrimaryTextInput
                bottom={20}
                isSaveIcon={true}
                top={5}
                isSave={isAge}
                maxLength={2}
                setisSave={setisAge}
                disabled={!isAge}
                placeholder={"Enter your age"}
                value={age}
                onChange={setage}
                headText="Age"
                keyboardType='decimal-pad'
                onPress={() => UpdateDoc("age", age, () => dispatch(userData({ ...usersData, age: age })))}
            />
            <PrimaryTextInput
                bottom={20}
                top={5}
                maxLength={20}
                isSave={isProfession}
                setisSave={setisProfession}
                disabled={!isProfession}
                isSaveIcon={true}
                placeholder={"Enter your profession"}
                value={profession}
                onChange={setprofession}
                headText="Profession"
                onPress={() => UpdateDoc("profession", profession, () => dispatch(userData({ ...usersData, profession: profession })))}
            />
            <View style={{ marginTop: 40 }} />
        </KeyboardAwareScrollView>
    )
}

export default Profile

const styles = StyleSheet.create({})