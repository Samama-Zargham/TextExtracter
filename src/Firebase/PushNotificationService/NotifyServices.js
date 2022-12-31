import messaging from '@react-native-firebase/messaging';
import { getFcmToken } from '../../Redux/reducers';
import Store from '../../Redux/Store';

async function requestUserPermission() {
    try {
        messaging().hasPermission()
            .then(async (enabled) => {
                if (enabled) {
                    const fcmToken = await messaging().getToken();
                    console.log(fcmToken)
                    if (fcmToken) {
                        Store.dispatch(getFcmToken(fcmToken))

                    }
                    // user has permissions

                } else {
                    messaging().requestPermission()
                        .then(async (enabled) => {
                            if (enabled) {
                                const fcmToken = await messaging().getToken();
                                console.log(fcmToken)
                                if (fcmToken) {
                                    Store.dispatch(getFcmToken(fcmToken))

                                }
                                // user has permissions

                            }
                        })
                        .catch(error => {
                            alert("Error", error)
                            // User has rejected permissions  
                        });
                }
            });
    } catch (error) {
        console.log("requestUserPermission==> . ", error)
    }
}

export {
    requestUserPermission,
};