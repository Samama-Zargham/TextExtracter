import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { FlashMessage } from '../components/SnackBar';
import { useSelector } from 'react-redux';

const SetBoatInfo = async (docs, AboutBoat, AboutYou, onSuccess, openCloseModal) => {
    // const UserType = useSelector(state => state.initialStates.isLogIn);
    // console.log("RootStack  ===>>>   ", UserType)
    console.log("SetBoatInfo Method--->>>   ", docs, " - ", AboutBoat, " - ", AboutYou)

    try {
        openCloseModal(true),
            await firestore()
                .collection("Boat")
                .doc(auth().currentUser.uid)
                .set({
                    AboutBoat: AboutBoat,
                    docs: docs,
                    name: AboutYou.name,
                    email: auth().currentUser.email,
                    phone: AboutYou.phNumber,
                    profile: AboutYou.profile
                })
                .then(() => {
                    console.log('User added!');
                    // console.log('User account created & signed in!', id);
                    FlashMessage('Successfully uploaded boat info', "success")
                    {
                        ///get the current User boat
                    }
                    firestore().collection("Boat").doc(auth().currentUser.uid).get()
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
                        return FlashMessage("No internet connection", "danger")
                    }
                })
    } catch (error) {
        console.log("catch error ->  ", error);
        openCloseModal(false)
    }


}
export default SetBoatInfo