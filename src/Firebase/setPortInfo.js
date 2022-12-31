import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { FlashMessage } from '../components/SnackBar';
import { useSelector } from 'react-redux';



const setPortInfo = async (
    AboutYou,
    AboutPort,
    PortPictures,
    portfacilities,
    onSuccess,
    openCloseModal
) => {
    // const UserType = useSelector(state => state.initialStates.isLogIn);
    // console.log("RootStack  ===>>>   ", UserType)
    // console.log("SetBoatInfo Method--->>>   ", docs, " - ", AboutBoat, " - ", AboutYou)

    try {
        openCloseModal(true),
            await firestore()
                .collection("Port")
                .doc(auth().currentUser.uid)
                .set({
                    name: AboutYou.name,
                    phone: AboutYou.phNumber,
                    portName: AboutPort.portName,
                    Location: AboutPort.Location,
                    discription: AboutPort.discription,
                    ratePerNight: AboutPort.ratePerNight,
                    lng: AboutPort.lng,
                    lat: AboutPort.lat,
                    PortPictures: PortPictures,
                    portfacilities: portfacilities,
                    profile: AboutYou.profile
                })
                .then(() => {
                    console.log('User added!');
                    // console.log('User account created & signed in!', id);

                    FlashMessage('Successfully uploaded port info', "success")

                    {
                        ///get the current User
                    }
                    firestore().collection("Port").doc(auth().currentUser.uid).get()
                        .then(docSnapshot => {
                            if (docSnapshot.exists) {
                                // console.log("PORT USER STACK===> ", docSnapshot)
                                onSuccess(docSnapshot)
                            }
                            else {
                                console.log("user not exist ==> ",)
                            }
                            openCloseModal(false)
                        }).catch((err) => {
                            openCloseModal(false),
                                console.log("err in setport info==>  ", err)
                        })

                })
                .catch((error) => {
                    openCloseModal(false),
                        console.log("FireStore error ->  ", error);
                    if (error.code === "auth/network-request-failed") {
                        // console.log('That email address is already in use!');
                        FlashMessage("No internet connection", "danger")
                    }
                })
    } catch (error) {
        console.log("catch error ->  ", error);
        openCloseModal(false)
    }


}


export default setPortInfo