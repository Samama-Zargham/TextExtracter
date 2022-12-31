import firestore from '@react-native-firebase/firestore';
import {FlashMessage} from '../components/SnackBar';

export const getAllDocs = async (collection, setData, openCloseModal) => {
  openCloseModal(true);

  try {
    const snapshot = await firestore().collection(collection).get();
    const allCollections = snapshot.docs.map(doc => {
      return {
        ...doc.data(),
        _id: doc.id,
      };
    });
    setData(allCollections);
    openCloseModal(false);
    return allCollections;
  } catch (error) {
    console.log('get All docs ', error);
    openCloseModal(false);

    if (error.code === 'auth/network-request-failed') {
      // console.log('That email address is already in use!');
      FlashMessage('No internet connection', 'danger');
    }
  }
};
