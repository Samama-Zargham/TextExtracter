import auth from '@react-native-firebase/auth';
import { FlashMessage } from '../components/SnackBar';


export const ForgetLink = (Email, navigation, openCloseModal) => {

  if (!Email) {
    FlashMessage("Please enter email", "danger")
  } else {
    openCloseModal(true)
    auth().sendPasswordResetEmail(Email.toString().trim())
      .then(function (user) {
        openCloseModal(false)
        FlashMessage("Please check your email", "success")
        navigation.goBack()

      }).catch(error => {
        openCloseModal(false)
        if (error.code === 'auth/user-not-found') {
          // console.log('That email address is invalid!');
          FlashMessage("This user is not found!", "danger")
        }
        if (error.code === 'auth/invalid-email') {
          // console.log('That email address is invalid!');
          FlashMessage("That email address is invalid!", "danger")
        }
        if (error.code === "auth/network-request-failed") {
          // console.log('That email address is already in use!');
          FlashMessage("No internet connection", "danger")
        }
        console.log(" --->   '", error.code);
      });
  }
}