import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';
import {FlashMessage} from '../components/SnackBar';

const UploadFileToStorageAndGetUrl = async (
  path,
  name,
  openCloseModal,
  setPhotoUrl,
) => {
  let userUid = auth().currentUser.uid;
  let directoryName = name;
  console.log('=>>  ', directoryName, '/', userUid);
  try {
    openCloseModal(true);
    try {
      const response = await fetch(path);
      const blob = await response.blob();
      const ref = storage().ref().child(`/${directoryName}/${userUid}`);
      const task = ref.put(blob);

      return new Promise((resolve, reject) => {
        task.on(
          'state_changed',
          () => {},
          err => {
            reject(err);
            openCloseModal(false);
            FlashMessage('Error uploading documents', 'danger');
          },
          async () => {
            const url = await task.snapshot.ref.getDownloadURL();
            setPhotoUrl(url);
            openCloseModal(false);
            FlashMessage('Uploaded Successfully', 'success');
            resolve(url);
          },
        );
      });
    } catch (err) {
      console.log('uploadImage error: ' + err.message);
      FlashMessage('Error uploading documents', 'danger');
      openCloseModal(false);
    }
  } catch (error) {
    openCloseModal(false);
    console.log('catch error -- >  ', error);
  }
};

export default UploadFileToStorageAndGetUrl;
