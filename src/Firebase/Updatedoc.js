import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const UpdateDoc = async (key, value, callback) => {
  let object = key == "name" ?
    {
      name: value
    }
    : key == "age" ?
      {
        age: value
      }
      : key == "coins" ?
        {
          coins: value
        }
        : key == "profession" &&
        {
          profession: value
        }
  try {
    await firestore()
      .collection("Users")
      .doc(auth().currentUser.uid)
      .update(object)
      .then(() => {
        console.log('Update !', key);
        callback(value);
      })
      .catch(error => {
        console.log('FireStore error ->  ', error);
      });
  } catch (error) {
    console.log('catch error ->  ', error);
  }
};

export {
  UpdateDoc,
};
