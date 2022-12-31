import firestore from '@react-native-firebase/firestore';
import { FlashMessage } from '../components/SnackBar';
import auth from '@react-native-firebase/auth';

export const getBookings = async (userType, openCloseModal) => {
  openCloseModal(true);

  try {
    const snapshot = await firestore().collection('Bookings').get();
    const allCollections = snapshot.docs.map(doc => {
      var randomColor = Math.floor(Math.random() * 16777215).toString(16);

      if (userType === 'Boat' && doc.data().boatId === auth().currentUser.uid) {

        return {
          ...doc.data(),
          _id: doc.id,
        };
      }

      if (userType === 'Port' && doc.data().portId === auth().currentUser.uid) {
        return {
          ...doc.data(),
          _id: doc.id,
          color:
            randomColor === 'ffffff'
              ? "lightGray"
              // Math.floor(Math.random() * 16777215).toString(16)
              : randomColor,
        };
      }
    });
    let letestCollection = allCollections.sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1))
    return letestCollection;
  } catch (error) {
    console.log('get All bookings ', error);
    if (error.code === 'auth/network-request-failed') {
      // console.log('That email address is already in use!');
      FlashMessage('No internet connection', 'danger');
    }
  } finally {
    openCloseModal(false);
  }
};

export const getPortEvents = async data => {
  try {
    const snapshot = await firestore().collection('Bookings').get();
    let allEvents = [];

    snapshot.docs.map(doc => {
      var randomColor = Math.floor(Math.random() * 16777215).toString(16);

      if (doc.data().portId === data.portId) {
        const event = {
          _id: doc.id,
          arrivalTime: doc.data()?.bookingDetail?.time?.arrivalTime,
          departureTime: doc.data()?.bookingDetail?.time?.departureTime,
          color:
            randomColor === 'ffffff'
              ? "lightGray"
              // Math.floor(Math.random() * 16777215).toString(16)
              : randomColor,
          boatUserProfile: doc.data()?.bookingDetail?.boatUserProfile,
          boatUserName: doc.data()?.bookingDetail?.boatUserName,

        };

        allEvents.push(event);
      }
    });

    return allEvents;
  } catch (error) {
    console.log('get All events ', error);
    if (error.code === 'auth/network-request-failed') {
      // console.log('That email address is already in use!');
      FlashMessage('No internet connection', 'danger');
    }
  }
};
