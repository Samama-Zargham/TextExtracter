import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import React, { useState } from 'react';
import { Header, PrimaryButton, PrimaryTextInput } from '../AuthScreens/SignIn';
import { COLORS } from '../../Utils/AppStyles';
import { ImageFromCamera, ImageFromGallrey } from '../../Utils/Common';
import LargeMessageBox from '../../components/Reusable/LargeMessageBox';
import { recognizeImage } from '../../Utils/recognizeImage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useSelector } from 'react-redux';
import { FlashMessage } from '../../components/Reusable/SnackBar';
import AnyIcon, { Icons } from '../../components/Reusable/AnyIcon';
import * as ImagePicker from 'react-native-image-picker';

const Home = ({ navigation }) => {
  const usersData = useSelector(state => state.users.userData);
  const [image, setimage] = useState(null);
  const [imageText, setimageText] = useState();
  const [isText, setisText] = useState(false);
  const [question, setquestion] = useState(null);

  const proccessImage = async url => {
    if (url) {
      try {
        let result = await recognizeImage(url);
        let extractedText = '';
        result?.blocks?.map(item => {
          let line = item?.lines[0].text;
          extractedText = extractedText + line + '\n';
        });

        console.log('first===>  ', extractedText);
        setimageText(extractedText);
      } catch (error) { }
    }
  };

  const handleShowExplation = question => {
    if (usersData?.coins < 1) {
      FlashMessage("You don't have enough coins", 'danger');
    } else if (question.length > 10) {
      navigation.navigate('QuestionsExplanation', { Question: question });
    } else {
      FlashMessage('Question string is too short to answer', 'danger');
    }
  };

  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps="handled"
      style={{ flex: 1, backgroundColor: COLORS.WHITE }}>
      <Text style={{ textAlign: 'right', marginTop: 20, right: 20 }}>
        <Header
          fontSize={14}
          width={'25%'}
          text={'Coins : '}
          color={COLORS.PRIMARY}
        />
        <Text style={{ color: 'black' }}>{usersData?.coins ?? 0}</Text>
      </Text>
      {image ? (
        <View style={{ alignItems: 'center', width: '100%', marginTop: 20 }}>
          <Text
            onPress={() => navigation.navigate('SignUp')}
            style={{
              color: COLORS.PRIMARY,
              fontSize: 18,
              fontWeight: '800',
              marginRight: 18,
              marginBottom: 10,
            }}>
            Image
          </Text>
          <Image
            resizeMode="center"
            style={{ width: '100%', height: 220 }}
            source={{ uri: image }}
          />

          {!isText ? (
            <PrimaryButton
              onPress={() => {
                setisText(true);
                proccessImage(image);
              }}
              width={'50%'}
              top={'4%'}
              fontSize={15}
              title={'Show Extracted Text'}
            />
          ) : (
            <>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  backgroundColor: COLORS.PRIMARY,
                  width: 120,
                  height: 90,
                  borderRadius: 6,
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  marginTop: 20,
                }}
                onPress={() => {
                  setisText(false);
                  setimage(null);
                }}>
                <AnyIcon
                  disabled={true}
                  type={Icons.MaterialCommunityIcons}
                  name={'camera-retake-outline'}
                  color={COLORS.WHITE}
                  size={40}
                  style={{ paddingHorizontal: 10 }}
                />
                <Text
                  style={{
                    fontSize: 15,
                    color: COLORS.WHITE,
                    fontWeight: '700',
                  }}>
                  Retake Image
                </Text>
              </TouchableOpacity>

              <LargeMessageBox value={imageText} onChange={setimageText} />
              <PrimaryButton
                onPress={() => {
                  setisText(false);
                  setimage(null);
                  // setquestion(null)
                  handleShowExplation(imageText);
                }}
                width={'60%'}
                top={'10%'}
                bottom={'20%'}
                fontSize={15}
                title={'Get Answer'}
              />
            </>
          )}
        </View>
      ) : (
        <>
          <Text
            style={{
              fontSize: 20,
              color: COLORS.textColor,
              alignSelf: 'center',
              marginTop: 20,
              fontWeight: '500',
            }}>
            Scan your question
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              backgroundColor: COLORS.PRIMARY,
              width: 170,
              height: 140,
              borderRadius: 6,
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              marginTop: 20,
            }}
            onPress={() => ImageFromCamera(setimage)}>
            <AnyIcon
              disabled={true}
              type={Icons.Ionicons}
              name={'camera-outline'}
              color={COLORS.WHITE}
              size={100}
              style={{ paddingHorizontal: 10 }}
            />
          </TouchableOpacity>
          <PrimaryButton
            onPress={() => ImageFromGallrey(setimage)}
            top={20}
            width={'70%'}
            title={'Select From Gallery'}
          />
          {/* <Text style={{ fontSize: 14, width: "90%", color: COLORS.BLACK, alignSelf: "center", marginTop: 40 }} >Or Ask any question</Text>
                        <LargeMessageBox
                            top={5}
                            placeholder={"Enter your question"}
                            onChange={setquestion}
                            value={question}
                        /> */}
          {/* {
                            question ?
                                <PrimaryButton
                                    onPress={() => {
                                        setimageText(null)
                                        handleShowExplation(question)
                                    }}
                                    width={"60%"}
                                    top={25}
                                    fontSize={15}
                                    title={"Show Explanation"}
                                />
                                : null
                        } */}
          <View style={{ marginTop: 50 }} />
        </>
      )}
    </KeyboardAwareScrollView>
  );
};

export default Home;
