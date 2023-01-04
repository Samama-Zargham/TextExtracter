import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { FlashMessage } from '../components/SnackBar';

export const getUser = async (collection, setUserData, openCloseModal) => {
  if (openCloseModal) openCloseModal(true);
  await firestore()
    .collection(collection)
    .doc(auth().currentUser.uid)
    .get()
    .then(documentSnapshot => {
      if (documentSnapshot.exists) {
        let userData = documentSnapshot.data();
        // console.log('User Data', documentSnapshot.data());
        // console.log("typeof", typeof (userData))
        setUserData(userData);
        if (openCloseModal)
          setTimeout(() => {
            openCloseModal(false);
          }, 1500);
      } else {
        setUserData(null);
        FlashMessage("User Data doesn't exist", 'danger');
        if (openCloseModal) openCloseModal(false);
      }
    })
    .catch(error => {
      console.log('get user ', error);
      if (error.code === 'auth/network-request-failed') {
        // console.log('That email address is already in use!');
        FlashMessage('No internet connection', 'danger');
      }
    });
};
