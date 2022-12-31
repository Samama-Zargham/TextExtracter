import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const createNotification = async (data, callBack) => {
  try {
    await firestore()
      .collection('Notifications')
      .doc()
      .set({...data, boatId: auth().currentUser.uid})
      .then(() => {
        console.log('Notification created!');
        callBack('success');
      })
      .catch(error => {
        console.log('FireStore error ->  ', error);
        callBack('error');
      });
  } catch (error) {
    console.log('catch error ->  ', error);
    callBack('error');
  }
};
