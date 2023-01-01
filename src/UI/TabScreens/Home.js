import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import { Header, PrimaryButton, PrimaryTextInput } from '../AuthScreens/SignIn'
import { COLORS } from '../../Utils/AppStyles'
import { ImageFromCamera, ImageFromGallrey } from '../../Utils/Common';
import LargeMessageBox from '../../components/Reusable/LargeMessageBox';
import { recognizeImage } from '../../Utils/recognizeImage';


const Home = ({ navigation }) => {
    const [image, setimage] = useState(null)
    const [imageText, setimageText] = useState()
    const [isText, setisText] = useState(false)

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
        <View style={{ flex: 1, backgroundColor: COLORS.WHITE }}>
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

                        <PrimaryButton
                            onPress={() => ImageFromCamera(setimage)}
                            width={"70%"}
                            top={"80%"}
                            title={"Take Picture"}
                        />
                        <PrimaryButton
                            onPress={() => ImageFromGallrey(setimage)}

                            top={20}
                            width={"70%"}
                            title={"Select From GAllery"}
                        />
                    </>
            }
        </View>
    )
}

export default Home


