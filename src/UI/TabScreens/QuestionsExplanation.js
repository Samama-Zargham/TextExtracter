import { StyleSheet, Text, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { COLORS } from '../../Utils/AppStyles';
import Loader from '../../components/Reusable/Loader';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { userData } from '../../Redux/reducers';
import { PrimaryButton } from '../AuthScreens/SignIn';
import LargeMessageBox from '../../components/Reusable/LargeMessageBox';
import { FlashMessage } from '../../components/Reusable/SnackBar';

const QuestionsExplanation = ({ navigation }) => {
  const usersData = useSelector(state => state.users.userData);
  let question = useRoute()?.params?.Question;
  let dispatch = useDispatch();
  const [loading, setloading] = useState(false);
  const [OGquestion, setOGquestion] = useState(null);
  const [answer, setanswer] = useState(null);
  console.log(usersData?.coins - 1);

  const ApiCall = () => {
    setloading(true);
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append(
      'Authorization',
      'Bearer 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',
    );

    var raw = JSON.stringify({
      model: 'davinci:ft-personal:id-2023-01-04-19-42-19',
      prompt: `<<${question}>>->>>`,
      temperature: 0,
      max_tokens: 500,
      top_p: 0.5,
      stop: 'END\n\n',
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch('https://api.openai.com/v1/completions', requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setOGquestion(result);
        getAnswered(result?.choices[0]?.text, setloading, setanswer);
      })

      .catch(error => {
        console.log('error', error);
        setloading(false);
        FlashMessage('No Internet connection', 'danger');
      });
  };
  const getAnswered = (question, setloading, setanswer) => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append(
      'Authorization',
      'Bearer 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',
    );

    var raw = JSON.stringify({
      model: 'text-davinci-003',
      prompt: `${question} -> Answer with explaination:`,
      temperature: 0,
      max_tokens: 500,
      top_p: 0.5,
      stop: 'END\n\n',
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch('https://api.openai.com/v1/completions', requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setanswer(result);

        firestore()
          .collection('Users')
          .doc(auth().currentUser.uid)
          .update({
            responses: firestore.FieldValue.arrayUnion({
              answer: result,
              question: question,
            }),
            coins: usersData?.coins == 0 ? 0 : usersData?.coins - 1,
          })
          .then(() => {
            dispatch(
              userData({
                ...usersData,
                coins: usersData?.coins == 0 ? 0 : usersData?.coins - 1,
              }),
            );
          })
          .catch(error => {
            console.log('error', error);
          });

        setloading(false);
      })
      .catch(error => {
        setloading(false);
        console.log('error', error);
      });
  };


  useEffect(() => {
    ApiCall();
  }, []);

  let strings = OGquestion?.choices[0]?.text?.toString();
  if (loading) {
    return <Loader loading={loading} lodingtxt="loading..." />;
  } else
    return (
      <KeyboardAwareScrollView style={{ flex: 1, backgroundColor: COLORS.WHITE }}>
        {strings?.includes('Not supported') ||
          strings?.includes('unsupported') ? (
          <>
            <Image
              resizeMode="contain"
              style={{
                alignSelf: 'center',
                width: 250,
                height: 250,
                marginTop: '40%',
              }}
              source={require('../../assets/unsupported.png')}
            />
            <Text
              style={{
                color: COLORS.textColor,
                fontWeight: '500',
                fontSize: 16,
                alignSelf: 'center',
              }}>
              {'Question is not supported'}
            </Text>
          </>
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
              Question
            </Text>
            <LargeMessageBox value={OGquestion?.choices[0]?.text} />
            <Text
              style={{
                fontSize: 20,
                color: COLORS.textColor,
                alignSelf: 'center',
                marginTop: 20,
                fontWeight: '500',
              }}>
              Answer
            </Text>
            <LargeMessageBox value={answer?.choices[0]?.text} />
          </>
        )}
        <PrimaryButton
          onPress={() => navigation.goBack()}
          width={'90%'}
          top={'10%'}
          bottom={'10%'}
          fontSize={15}
          title={'Continue'}
        />
      </KeyboardAwareScrollView>
    );
};

export default QuestionsExplanation;

const styles = StyleSheet.create({});


