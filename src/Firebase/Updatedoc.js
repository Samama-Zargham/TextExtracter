import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {FlashMessage} from '../components/SnackBar';

const UpdateProfilePic = async (collection, value) => {
  // console.log('FIREBASE FUNC CALL VALUE => ');

  try {
    await firestore()
      .collection(collection)
      .doc(auth().currentUser.uid)
      .update({
        profile: value,
      })
      .then(() => {
        console.log('Update profile!');
      })
      .catch(error => {
        console.log('FireStore error ->  ', error);
      });
  } catch (error) {
    console.log('catch error ->  ', error);
  }
};

const UpdateName = async (collection, value, callback) => {
  try {
    await firestore()
      .collection(collection)
      .doc(auth().currentUser.uid)
      .update({
        name: value,
      })
      .then(() => {
        console.log('Update Name!');
        callback(value);
      })
      .catch(error => {
        console.log('FireStore error ->  ', error);
      });
  } catch (error) {
    console.log('catch error ->  ', error);
  }
};

const UpdateEmail = async (collection, newMail) => {
  try {
    await firestore()
      .collection(collection)
      .doc(auth().currentUser.uid)
      .update({
        email: newMail,
      })
      .then(() => {
        console.log('Update UpdateEmail!');
        auth()
          .currentUser.updateEmail(newMail)
          .then(() => {
            console.log('Update email');
          })
          .catch(err => {
            console.log(err);
            FlashMessage(
              'Session expire please login again to change email',
              'danger',
            );
          });
      })
      .catch(error => {
        console.log('FireStore error ->  ', error);
      });
  } catch (error) {
    console.log('catch error ->  ', error);
  }
};

const UpdateNumber = async (collection, value) => {
  try {
    await firestore()
      .collection(collection)
      .doc(auth().currentUser.uid)
      .update({
        phone: value,
      })
      .then(() => {
        console.log('Update UpdateNumber!');
      })
      .catch(error => {
        console.log('FireStore error ->  ', error);
      });
  } catch (error) {
    console.log('catch error ->  ', error);
  }
};

const UpdatePortData = async (collection, value) => {
  // console.log("first-->> . ", value)
  try {
    await firestore()
      .collection(collection)
      .doc(auth().currentUser.uid)
      .update(value)
      .then(() => {
        console.log('Update UpdatePortName!');
      })
      .catch(error => {
        console.log('FireStore error ->  ', error);
      });
  } catch (error) {
    console.log('catch error ->  ', error);
  }
};

const UpdateRatesPerNight = async (collection, value) => {
  try {
    await firestore()
      .collection(collection)
      .doc(auth().currentUser.uid)
      .update({
        ratePerNight: value,
      })
      .then(() => {
        console.log('Update UpdateRatesPerNight!');
      })
      .catch(error => {
        console.log('FireStore error ->  ', error);
      });
  } catch (error) {
    console.log('catch error ->  ', error);
  }
};
const Updatediscription = async (collection, value) => {
  try {
    await firestore()
      .collection(collection)
      .doc(auth().currentUser.uid)
      .update({
        discription: value,
      })
      .then(() => {
        console.log('Update Updatediscription!');
      })
      .catch(error => {
        console.log('FireStore error ->  ', error);
      });
  } catch (error) {
    console.log('catch error ->  ', error);
  }
};
const UpdateLocation = async (collection, lat, lng, location) => {
  try {
    await firestore()
      .collection(collection)
      .doc(auth().currentUser.uid)
      .update({
        Location: location,
        lat: lat,
        lng: lng,
      })
      .then(() => {
        console.log('Update UpdateLocation!');
      })
      .catch(error => {
        console.log('FireStore error ->  ', error);
      });
  } catch (error) {
    console.log('catch error ->  ', error);
  }
};
const UpdateAboutBoat = async (collection, AboutBoat) => {
  try {
    await firestore()
      .collection(collection)
      .doc(auth().currentUser.uid)
      .update({
        AboutBoat: AboutBoat,
      })
      .then(() => {
        console.log('Update AboutBoat!');
      })
      .catch(error => {
        console.log('FireStore error ->  ', error);
      });
  } catch (error) {
    console.log('catch error ->  ', error);
  }
};
const UpdatePortPhotos = async (collection, PortPictures) => {
  console.log('first------->>>   ', PortPictures);
  try {
    await firestore()
      .collection(collection)
      .doc(auth().currentUser.uid)
      .update({
        PortPictures: PortPictures,
      })
      .then(() => {
        console.log('Update UpdatePortPhotos!');
      })
      .catch(error => {
        console.log('FireStore error ->  ', error);
      });
  } catch (error) {
    console.log('catch error ->  ', error);
  }
};

export {
  UpdateProfilePic,
  UpdateName,
  UpdateNumber,
  UpdateEmail,
  UpdatePortData,
  UpdateAboutBoat,
  Updatediscription,
  UpdateRatesPerNight,
  UpdateLocation,
  UpdatePortPhotos,
};
