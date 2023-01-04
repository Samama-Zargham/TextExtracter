import { StyleSheet, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { COLORS } from '../../Utils/AppStyles';
import Loader from '../../components/Reusable/Loader';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { userData } from '../../Redux/reducers';

const QuestionsExplanation = () => {
    const usersData = useSelector(state => state.users.userData);
    let question = useRoute()?.params?.Question;
    let dispatch = useDispatch();
    const [loading, setloading] = useState(false)
    const [answerd, setanswerd] = useState(null)
    console.log(usersData?.coins - 1)

    const ApiCall = () => {
        setloading(true)
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer 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");

        var raw = JSON.stringify({
            "model": "davinci:ft-personal:davinci-ft-personal-sns-v1-2023-01-01-08-15-30",
            "prompt": ` questioner_age: ${usersData?.age}\n\ninput_text: ${question}`,
            "temperature": 0,
            "max_tokens": 1000,
            "top_p": 0.5,
            "stop": "END\n\n"
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://api.openai.com/v1/completions", requestOptions)
            .then(response => response.json())
            .then(result => {
                setloading(false)
                console.log(result);
                setanswerd(result);

                firestore().collection("Users").doc(auth().currentUser.uid).update({
                    responses: firestore.FieldValue.arrayUnion(result),
                    coins: usersData?.coins == 0 ? 0 : usersData?.coins - 1
                }).then(() => {

                    dispatch(userData({ ...usersData, coins: usersData?.coins == 0 ? 0 : usersData?.coins - 1 }))
                }).catch(error => {
                    console.log('error', error)
                });

            })
            .catch(error => {
                console.log('error', error)
                setloading(false)
            });
    }

    useEffect(() => {
        // ApiCall()
    }, [])


    let strings = answerd?.choices[0]?.text?.toString()
    if (loading) {
        return <Loader loading={loading} lodingtxt="loading..." />
    }
    else return (
        <KeyboardAwareScrollView style={{ flex: 1, backgroundColor: COLORS.WHITE }} >
            {
                strings?.includes("Not supported") || strings?.includes("unsupported")
                    ?
                    <>
                        <Image
                            resizeMode='contain'
                            style={{ alignSelf: "center", width: 250, height: 250, marginTop: "40%" }}
                            source={require("../../assets/unsupported.png")}
                        />
                        <Text
                            style={{
                                color: COLORS.textColor,
                                fontWeight: "500",
                                fontSize: 16,
                                alignSelf: "center"
                            }} >
                            {"Question is not supported"}
                        </Text>
                    </>

                    :

                    <Text
                        style={{
                            color: COLORS.textColor,
                            fontSize: 16,
                            width: "90%",
                            alignSelf: "center"
                        }} >
                        {answerd?.choices[0]?.text}
                    </Text>
            }
        </KeyboardAwareScrollView>
    )
}

export default QuestionsExplanation

const styles = StyleSheet.create({})