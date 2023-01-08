import auth from "@react-native-firebase/auth"
import { FlashMessage } from "../components/Reusable/SnackBar"
import firestore from '@react-native-firebase/firestore';
import { GoogleSignin, statusCodes  } from '@react-native-google-signin/google-signin';


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
                    console.log()
                    if (auth().currentUser.emailVerified) {
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
                    } else {
                        FlashMessage("Please First verify your email", "danger")
                    }
                    openCloseModal(false)
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



export const loginWithGoogle = async (openCloseModal, onSuccess) => {
    GoogleSignin.configure(
{        webClientId:"919222476321-83s028fmuiem5q2bfdfhkgo3kj4rnqto.apps.googleusercontent.com"
}    );
    try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        console.log("userInfo====>>>   ", userInfo)
      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          // user cancelled the login flow
        } else if (error.code === statusCodes.IN_PROGRESS) {
          // operation (e.g. sign in) is in progress already
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          // play services not available or outdated
        } else {
          // some other error happened
        }
        console.log("first====>>>  ", error)
      }

    openCloseModal(true)
   
    // // Check if your device supports Google Play
    // await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true }).catch((er) => console.log("GoogleSignin-> ", er))
    // // Get the users ID token
    // await GoogleSignin.signIn().then((res) => {

    //     console.log(res)
    // })
    // .catch((er) => { console.log("===>>> ", er), FlashMessage("Email Already exists!", "danger") })


    // Create a Google credential with the token
    // const googleCredential = auth.GoogleAuthProvider.credential(idToken).catch((er) => console.log("googleCredential =. ", er))

    // Sign-in the user with the credential
    // auth().signInWithCredential(googleCredential).then(async () => {
    //     const email = (await GoogleSignin.getCurrentUser()).user.email
    //     console.log( "email==>>> ",   email)
    //     // firestore()
    //     //     .collection("Users")
    //     //     .doc(auth().currentUser.uid)
    //     //     .set({
    //     //         email: email,
    //     //         age: "",
    //     //         profession: "",
    //     //         name: "",
    //     //         coins: "5",
    //     //         responses: []
    //     //     })
    //     //     .then(() => {
    //     //         console.log('User added!');
    //     //         // console.log('User account created & signed in!', id);
    //     //         onSuccess({ user: email })
    //     //         FlashMessage('Login Successfully', "success")
    //     //     })
    //     //     .catch(error => {
    //     //         console.log('FireStore error ->  ', error);
    //     //     })


    //     openCloseModal(false)
    // })
    //     .catch(error => {
    //         openCloseModal(false)
    //         console.log('catch   ', "1" + error.code + "1");
    //         // console.error(error);
    //         if (error.code == 'auth/user-not-found') {
    //             // console.log('That email address is already in use!');
    //             return FlashMessage("Email doesn't exist!", "danger")
    //         }
    //         if (error.code === "auth/network-request-failed") {
    //             // console.log('That email address is already in use!');
    //             return FlashMessage("No internet connection", "danger")
    //         }
    //         if (error.code == 'auth/wrong-password') {
    //             return FlashMessage('Password is Wrong', "danger")
    //         }
    //         if (error.code == 'auth/invalid-email') {
    //             return FlashMessage('Invalid email!', "danger")
    //         }

    //     })

}