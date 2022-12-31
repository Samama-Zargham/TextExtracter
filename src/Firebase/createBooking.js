import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import moment from 'moment';
import { FlashMessage } from '../components/SnackBar';

export const createBooking = async (data, newBookingNotify, callBack, setIsLoading) => {
  try {
    setIsLoading(true)
    await firestore()
      .collection('Bookings')
      .doc()
      .set({ ...data, boatId: auth().currentUser.uid })
      .then(async () => {

        console.log('Booking created!');
        await firestore()
          .collection('NewBookings')
          .doc()
          .set({
            ...newBookingNotify, createdAt: moment(new Date()).unix() * 1000, boatId: auth().currentUser.uid
          })
          .then(async () => {
            callBack('success');
            // FlashMessage('Booking created successfully', 'success');
            FlashMessage('Transaction completed successfully', 'success');
            setIsLoading(false)

          })
          .catch(error => {
            console.log('FireStore error ->  ', error);
            setIsLoading(false)
          });
      })
      .catch(error => {
        console.log('FireStore error ->  ', error);
        setIsLoading(false)
        callBack('error');
      });
  } catch (error) {
    console.log('catch error ->  ', error);
    setIsLoading(false)
    callBack('error');
  }
};
