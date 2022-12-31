import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import moment from 'moment';
import { FlashMessage } from '../components/SnackBar';

export const addCancelBookings = async (data, docId, callBack) => {
    try {
        await firestore()
            .collection('CancelBookings')
            .doc()
            .set({
                ...data, createdAt: moment(new Date()).unix() * 1000,
            })
            .then(async () => {
                await firestore()
                    .collection("Bookings")
                    .doc(docId)
                    .delete().then(
                        () => {
                            callBack()

                        }).catch((err) => console.log("dellete booking cancel err==> . ", err))
            })
            .catch(error => {
                console.log('FireStore error ->  ', error);
            });
    } catch (error) {
        console.log('catch error ->  ', error);
    }
};