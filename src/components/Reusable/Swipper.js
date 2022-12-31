/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import { JoinGroup, SwipperQuotes } from '../../assets';
import { colors, fontFamilyRoboto, fontPixel, GeneralWidth, heightPixel, IOSAndroid, routes, simpleRowStyle, widthPixel } from '../../services';
import AddtoFavHeart from './AddtoFavHeart';
import GeneralText from './GeneralText';
import RoundGreenBtn from './RoundGreenBtn';
import UserProfileWithBorder from './UserProfileWithBorder';

export const Swipper = props => {
  let navigation = useNavigation()
  let dummyUser = 'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=679';



  if (props?.data) {
    return (
      <Swiper
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
        width={'100%'}
        height={"21%"}
        loop={true}
        // autoplay={true}
        style={styles.wrapper}
        showsButtons={false}>
        {props?.data?.map((item, index) => {
          return (
            props?.renderComponent ? props?.renderComponent : <TouchableOpacity
              onPress={() => navigation.navigate(routes.RquestDetails)}
              activeOpacity={0.9}
              key={index}
              style={styles.container}
            >
              <View style={{ padding: 10, }}>
                <UserProfileWithBorder container={{ position: "absolute", top: heightPixel(-35), left: 10 }} />
                <View style={{ flexDirection: "row", width: "18%", justifyContent: "space-between", alignSelf: "flex-end", }} >
                  {/* <TouchableOpacity onPress={() => console.log("JoinGroup")}
                        style={{ padding: 2 }}> */}
                  <JoinGroup onPress={() => console.log("JoinGroup")} width={widthPixel(35)} height={heightPixel(30)} />
                  {/* </TouchableOpacity> */}
                  <AddtoFavHeart
                    iconSize={22}
                    fillColor={colors.errorColor}
                    emptyBorderColor={colors.errorColor}
                  />
                </View>
                <GeneralText
                  font={16}
                  lineHeight={20}
                  fontWeight={600}
                  Color={colors.darkTextColor}
                  text={"Isabelle Charles"}
                />
                <SwipperQuotes width={widthPixel(24)} height={heightPixel(24)} style={{ marginVertical: 1 }} />

                <Text style={styles.detail} >{"Hi! This is Isabelle. I need a Shopping Buddy who can help me go to market and choose best items from the market..."}
                  <Text style={[styles.detail, { color: colors.PrimaryColorBlue }]}>{"Know more"}</Text></Text>
              </View>

            </TouchableOpacity>

          );
        })}
      </Swiper>
    );
  } else {
    return (
      <Swiper style={styles.wrapper} showsButtons={false}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
    );
  }
};

const styles = StyleSheet.create({
  wrapper: {},
  container: {
    ...GeneralWidth,
    height: heightPixel(148),
    ...IOSAndroid.elevation4,
    backgroundColor: colors.white,
    marginBottom: 10,
    marginTop: heightPixel(55),
    borderRadius: 8
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  activeDot: {
    width: widthPixel(16),
    height: widthPixel(16),
    borderRadius: 100,
    backgroundColor: colors.PrimaryColorBlue,
    marginRight: 5,
    top: heightPixel(55),
    zIndex: 1
  },
  dot: {
    width: widthPixel(12),
    height: widthPixel(12),
    borderRadius: 100,
    backgroundColor: colors.lightGray,
    marginRight: 5,
    top: heightPixel(55),
    zIndex: 1
  },
  detail: {
    fontSize: fontPixel(12),
    color: colors.textColor,
    fontFamily: fontFamilyRoboto[400]
  }
});


const groupDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per ince"