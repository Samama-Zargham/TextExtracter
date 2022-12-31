/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
import { Image, SafeAreaView, Text, View, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { colors, GeneralWidth, heightPixel, IOSAndroid, widthPixel } from '../../services';
import AnySvg, { LocationIcon } from '../../assets/svgs/Svgs';
import PrimaryInput from '../Reusable/PrimaryInput';

const AddLocation = ({ text, setLocation, Location, setlat, setlng }) => {
    console.log("====. ", text)
    const [modalVisible, setmodalVisible] = useState(false)
    return (
        <>
            <PrimaryInput
                onPress={() => setmodalVisible(true)}
                disabled={true}
                isRightIcon={LocationIcon}
                top={22}
                head={"Location"}
                placeholder={"Add location"}
            />
            {
                modalVisible &&
                <AddLocationModal
                    setlat={setlat}
                    setlng={setlng}
                    Location={Location}
                    setmodalVisible={setmodalVisible}
                    modalVisible={modalVisible}
                    setLocation={setLocation} />
            }

            {/* <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => { setmodalVisible(true) }}
            style={{
                ...GeneralWidth,
                borderWidth: 1,
                borderColor: colors.lightGray,
                paddingLeft: widthPixel(5),
                height: heightPixel(56),
                borderRadius: 4,
                color: colors.textColor,
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 5
            }}>
            <Text numberOfLines={1} style={{
                fontSize: 16,
                color: "black",
                fontFamily: 'Poppins-Regular',
            }}>
                {text}
            </Text>
            <TouchableOpacity
                onPress={() => setmodalVisible(true)}
            >
                <AnySvg
                    width={25}
                    height={25}
                    name={LocationIcon}
                />
            </TouchableOpacity>
           
        </TouchableOpacity> */}
        </>
    )
}

const AddLocationModal = ({ setlng, setlat, modalVisible, setLocation, setmodalVisible, Location }) => {
    const [showToast, setshowToast] = useState(false)
    const addplace = () => {
        if (!Location) {
            // console.log("=====>  ", Location)
            setshowToast(true)
            setTimeout(() => {
                setshowToast(false)
            }, 1000);
        } else {
            setmodalVisible(false)
        }
    }
    return (
        <Modal
            transparent={true}
            visible={modalVisible}
            animationType="slide"
        >
            <SafeAreaView
                style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: "white",
                }}>

                {
                    showToast ?
                        <View style={{ backgroundColor: "red", padding: 10 }}>
                            <Text numberOfLines={1} style={{
                                fontSize: 18,
                                fontWeight: "500",
                                color: "white",
                            }}>
                                {"Please select a location"}
                            </Text>
                        </View>
                        :
                        <View style={{
                            flexDirection: "row",
                            marginTop: 10,
                            width: "90%",
                            alignSelf: "center",
                            justifyContent: "space-between"
                        }}>
                            {/* <AnyIcon
                                    action={() => setmodalVisible(false)}
                                    type={Icons.Feather}
                                    name="x"
                                    size={27}
                                    color="black"
                                /> */}
                            <Text
                                onPress={() => setmodalVisible(false)}
                                numberOfLines={1}
                                style={{
                                    fontSize: 18,
                                    fontWeight: "500",
                                    color: "red",
                                }}>
                                {"Cancel"}
                            </Text>
                            <Text numberOfLines={1} style={{
                                fontSize: 18,
                                fontWeight: "500",
                                color: "black",
                            }}>
                                {"Select a location"}
                            </Text>
                            <Text
                                onPress={addplace}
                                numberOfLines={1}
                                style={{
                                    fontSize: 18,
                                    fontWeight: "500",
                                    color: colors.PrimaryColorBlue,
                                }}>
                                {"Add"}
                            </Text>
                        </View>}
                <GooglePlacesAutocomplete
                    placeholder={"Find a location..."}
                    listViewDisplayed={false}
                    styles={{
                        description: { color: "black" },
                        textInputContainer: { width: "90%", alignSelf: "center" },
                        poweredContainer: { display: 'none' },
                        textInput: {
                            height: 45,
                            width: '80%',
                            marginVertical: 30,
                            backgroundColor: '#D9D9D9',
                            borderRadius: 10,
                            paddingLeft: 10,
                            color: "black"
                        }
                    }}
                    query={{
                        key: 'AIzaSyDt9GY0qjMwSFvi-ODbrRJFZg3wCwtZofc',
                        language: 'en', // language of the results
                    }}
                    fetchDetails={true}
                    onPress={(data, details) => {
                        setlat(details?.geometry?.location?.lat);
                        setlng(details?.geometry?.location?.lng);
                        setLocation(data.description);
                    }}
                    placeholderTextColor="gray"
                    onFail={(error) => console.error(error)}
                />


            </SafeAreaView>
        </Modal>

    );
};


export default AddLocation

