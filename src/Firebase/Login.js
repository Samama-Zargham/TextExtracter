import auth from "@react-native-firebase/auth"
import { FlashMessage } from "../components/Reusable/SnackBar"
import firestore from '@react-native-firebase/firestore';

export const Login = (Email, Password, onSuccess, openCloseModal) => {
    console.log(Email, "  ", Password)

    if (!Email || !Password) {
        return FlashMessage("Please Fill The Email or Password", "danger")
    }
    else {
        openCloseModal(true),
            auth()
                .signInWithEmailAndPassword(Email.toString().trim(), Password)
                .then(() => {
                    openCloseModal(false)
                    firestore()
                        .collection("Users")
                        .doc(auth().currentUser.uid)
                        .get()
                        .then(documentSnapshot => {
                            if (documentSnapshot.exists) {
                                let userData = documentSnapshot.data();
                                console.log("daata=.>> ", userData)
                                onSuccess(userData)
                                FlashMessage('Login Successfully', "success")
                            }
                        })
                        .catch(error => {
                            console.log('get user ', error);
                        });

                })
                .catch(error => {
                    openCloseModal(false)
                    console.log('catch   ', "1" + error.code + "1");
                    // console.error(error);
                    if (error.code == 'auth/user-not-found') {
                        // console.log('That email address is already in use!');
                        return FlashMessage("Email doesn't exist!", "danger")
                    }
                    if (error.code === "auth/network-request-failed") {
                        // console.log('That email address is already in use!');
                        return FlashMessage("No internet connection", "danger")
                    }
                    if (error.code == 'auth/wrong-password') {
                        return FlashMessage('Password is Wrong', "danger")
                    }
                    if (error.code == 'auth/invalid-email') {
                        return FlashMessage('Invalid email!', "danger")
                    }

                })
    }
}

