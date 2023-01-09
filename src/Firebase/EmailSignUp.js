import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { FlashMessage } from '../components/Reusable/SnackBar';

export const UserSignUp = (
  Email,
  password,
  confirmPass,
  onSuccess,
  openCloseModal,
) => {
  let email = Email.toString().trim();
  console.log("UserSignUp Method--->>>   ", password, " - ", confirmPass, " - ", Email)
  try {
    if (!email || !password) {
      return FlashMessage("Please Fill Email or Password", "danger")
    } else if (password != confirmPass) {
      return FlashMessage("Password doesn't match", "danger")
    }
    else if (password?.length < 6) {
      return FlashMessage("Password must be atleast 6 characters long", "danger")
    }
    else if (password?.length > 18) {
      return FlashMessage("Password must not be greater than 18 characters", "danger")
    }
    else {
      openCloseModal(true),
        auth()
          .createUserWithEmailAndPassword(email, password)
          .then(async user => {
            // const id = user.user.uid
            auth().currentUser.sendEmailVerification()
            openCloseModal(false);
            FlashMessage('An email has sent to your mail for verification', 'success');
            console.log(auth().currentUser.uid)
            firestore()
              .collection("Users")
              .doc(auth().currentUser.uid)
              .set({
                email: Email,
                age: "",
                profession: "",
                name: "",
                coins: "10",
                responses: [],
                Date: new Date().getDate()
              })
              .then(() => {
                console.log('User added!');
                // console.log('User account created & signed in!', id);
                onSuccess();

              })
              .catch(error => {
                console.log('FireStore error ->  ', error);
              })
          })
          .catch(error => {
            openCloseModal(false);
            if (error.code === 'auth/email-already-in-use') {
              // console.log('That email address is already in use!');
              return FlashMessage('That email address is already registered!', 'danger');
            }
            if (error.code === 'auth/network-request-failed') {
              // console.log('That email address is already in use!');
              return FlashMessage('No internet connection', 'danger');
            }

            if (error.code === 'auth/invalid-email') {
              // console.log('That email address is invalid!');
              return FlashMessage('Invalid email!', 'danger');
            }

            // console.error(error);
          });
    }
  } catch (error) {
    openCloseModal(false)
    console.log('error catch ==>  ', error);
  }
};
