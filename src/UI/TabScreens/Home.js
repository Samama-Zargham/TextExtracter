import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import { Header, PrimaryButton, PrimaryTextInput } from '../AuthScreens/SignIn'
import { COLORS } from '../../Utils/AppStyles'
import { ImageFromCamera, ImageFromGallrey } from '../../Utils/Common';
import LargeMessageBox from '../../components/Reusable/LargeMessageBox';
import { recognizeImage } from '../../Utils/recognizeImage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useSelector } from 'react-redux';


const Home = ({ navigation }) => {
    const usersData = useSelector(state => state.users.userData?.data);
    const [image, setimage] = useState(null)
    const [imageText, setimageText] = useState()
    const [isText, setisText] = useState(false)
    const [question, setquestion] = useState(null)
    const proccessImage = async (url) => {
        if (url) {
            try {
                let result = await recognizeImage(url);
                let extractedText = ''
                result?.blocks?.map((item) => {
                    let line = item?.lines[0].text;
                    extractedText = extractedText + " " + line
                })

                console.log("first===>  ", extractedText)
                setimageText(extractedText)

            } catch (error) {

            }

        }
    };


    return (
        <KeyboardAwareScrollView
            keyboardShouldPersistTaps='handled'
            style={{ flex: 1, backgroundColor: COLORS.WHITE }}>
            <Text style={{ alignSelf: "center", marginTop: 20 }}>
                <Header
                    fontSize={14}
                    width={"25%"}
                    text={"Your coins : "}
                    color={COLORS.PRIMARY}
                />
                <Text style={{ color: "black" }}>{usersData?.coins ?? 0}</Text>
            </Text>
            {
                image ?
                    <View style={{ alignItems: "center", width: "100%", marginTop: 20 }} >
                        <Text
                            onPress={() => navigation.navigate("SignUp")}
                            style={{
                                color: COLORS.PRIMARY,
                                fontSize: 18,
                                fontWeight: "800",
                                marginRight: 18,
                                marginBottom: 10
                            }}>Image</Text>
                        <Image
                            resizeMode='center'
                            style={{ width: "100%", height: 220, }}
                            source={{ uri: image }}
                        />

                        {
                            !isText ? <PrimaryButton
                                onPress={() => {
                                    setisText(true)
                                    proccessImage(image)
                                }}
                                width={"60%"}
                                top={"10%"}
                                fontSize={15}
                                title={"Show Text Explanation"}
                            />
                                :
                                <>

                                    <LargeMessageBox
                                        value={imageText}
                                    />
                                    <PrimaryButton
                                        onPress={() => {
                                            setisText(false)
                                            setimage(null)
                                        }}
                                        width={"60%"}
                                        top={"10%"}
                                        fontSize={15}
                                        title={"Continue"}
                                    />
                                </>
                        }

                    </View>
                    :
                    <>
                        <Text style={{ fontSize: 14, width: "90%", color: COLORS.BLACK, alignSelf: "center", marginTop: 40 }} >Ask any question or take picture/Select picture from gallery to get your answers and their explation</Text>

                        <PrimaryButton
                            onPress={() => ImageFromCamera(setimage)}
                            width={"70%"}
                            top={"15%"}
                            title={"Take Picture"}
                        />
                        <PrimaryButton
                            onPress={() => ImageFromGallrey(setimage)}
                            top={20}
                            width={"70%"}
                            title={"Select From Gallery"}
                        />
                        <Text style={{ fontSize: 14, width: "90%", color: COLORS.BLACK, alignSelf: "center", marginTop: 40 }} >Or Ask any question</Text>
                        <LargeMessageBox
                            top={5}
                            placeholder={"Enter your question"}
                            onChange={setquestion}
                            value={question}
                        />
                        {
                            question ?
                                <PrimaryButton
                                    onPress={() => {
                                    }}
                                    width={"60%"}
                                    top={25}
                                    fontSize={15}
                                    title={"Show Explanation"}
                                />
                                : null
                        }
                        <View style={{ marginTop: 50 }} />
                    </>
            }
        </KeyboardAwareScrollView>
    )
}

export default Home


