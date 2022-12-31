
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';
import { FlashMessage } from '../components/SnackBar';

const UploadMultiImagesfbStorage = async (path, name) => {
    let userUid = auth().currentUser.uid
    let directoryName = name
    let newPath = path.replace(/[^a-zA-Z ]/g, "")
    var lastFive = newPath.substr(newPath.length - 20);
    // console.log("first--newPath->>>> ", lastFive)
    // console.log("=>>  ", directoryName, "/", userUid)
    try {

        try {
            const response = await fetch(path);
            const blob = await response.blob();
            const ref = storage().ref(`/${directoryName}/${userUid + lastFive}`)
            const task = ref.put(blob);
            // console.log("first-->>  ", blob)

            return new Promise((resolve, reject) => {
                task.on(
                    'state_changed',
                    () => { },
                    err => {
                        reject(err);
                        FlashMessage("Error uploading files", "danger")
                    },
                    async () => {
                        const url = await task.snapshot.ref.getDownloadURL();
                        console.log("URLlllllllll  =>  ", url)
                        resolve(url);
                    },
                );
            });
        } catch (err) {
            console.log('uploadImage error: ' + err.message);
            FlashMessage("Error uploading files", "danger")
        }
    } catch (error) {
        console.log("catch error -- >  ", error)
    }

}

export default UploadMultiImagesfbStorage

