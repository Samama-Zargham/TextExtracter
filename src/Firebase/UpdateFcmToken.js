import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { FlashMessage } from '../components/SnackBar';
import Store from '../Redux/Store';



const UpdateFcmToken = async (
    collection, isLogout
) => {
    console.log("fcmToken: Store.getState().initialStates?.fcmToken==> ", Store.getState().initialStates?.fcmToken)
    console.log("collection==> ", collection)
    try {
        await firestore()
            .collection(collection)
            .doc(auth().currentUser.uid)
            .update({
                fcmToken: isLogout == true ? "jdsfh34789h" : Store.getState().initialStates?.fcmToken
            })
            .then((res) => {
                console.log("UpdateFcmToken res==> . ", res)

            })
            .catch((error) => {
                console.log("UpdateFcmToken FireStore error ->  ", error);
            })

    } catch (error) {
        console.log("UpdateFcmToken catch error ->  ", error);
    }


}
export const getFcmToken = async (
    collection, doc
) => {
    try {
        const userDoc = firestore()
            .collection(collection)
            .doc(doc);

        return userDoc.get()
            .then((docSnapshot) => {
                if (docSnapshot.exists) {
                    let doc = docSnapshot.data()
                    return doc?.fcmToken
                } else return "fjwfh34789wn"
            })


    } catch (error) {
        console.log("UpdateFcmToken catch error ->  ", error);
    }


}

export default UpdateFcmToken