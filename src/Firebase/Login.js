import auth from "@react-native-firebase/auth"
import { Alert } from "react-native";
import { FlashMessage } from "../components/SnackBar";

export const Login = (Email, Password, UserType, onSuccess, openCloseModal) => {
    console.log(Email, "  ", Password)

    if (!Email || !Password) {
        return FlashMessage("Please Fill The Email or Password", "danger")
    }
    else if (!UserType) {
        return FlashMessage("Please Select User type", "danger")
    }
    else {
        openCloseModal(true),
            auth()
                .signInWithEmailAndPassword(Email.toString().trim(), Password)
                .then(() => {
                    openCloseModal(false)

                    Alert.alert(
                        'Login',
                        "Are you sure you want to proceed as a " + UserType + " user", // <- this part is optional, you can pass an empty string
                        [
                            {
                                text: 'Yes', onPress: () => {
                                    FlashMessage('Login Successfully', "success"),
                                        onSuccess()
                                }
                            },
                            {
                                text: 'No',
                                onPress: () => console.log('No Pressed'),
                                style: 'cancel',
                            },
                        ]
                    )
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
                    if(error.code == 'auth/invalid-email'){
                        return FlashMessage('Invalid email!', "danger")
                    }

                })
    }
}

