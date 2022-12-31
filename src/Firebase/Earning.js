import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';


const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

export const getEarning = async (setEarning, loading) => {
    var
        currentDate = new Date(),
        currentYearKey = currentDate.getFullYear(),
        currentMonthKey = monthNames[currentDate.getMonth()];
    setEarning({
        monthsName: [],
        earningArray: [],
        totalEarning: 0,
    })

    try {
        loading(true)
        const userDoc = await firestore().collection('Port Earning').doc(auth().currentUser.uid)

        userDoc.get()
            .then((docSnapshot) => {
                if (docSnapshot.exists) {
                    let data = docSnapshot.data();
                    if (data[currentYearKey]) {
                        let currentYearData = data[currentYearKey]
                        var size = Object.keys(currentYearData).length;
                        if (size <= 6) {
                            let tempMonths = [], tempEarningArray = [], countEarning = 0;
                            for (let i = 0; i <= monthNames.length; i++) {
                                for (const [key, value] of Object.entries(currentYearData)) {
                                    if (key == monthNames[i]) {
                                        // console.log(`${key}: ${value.totalEarning}`);
                                        tempMonths.push([key.slice(0, 3)]);
                                        tempEarningArray.push([value.totalEarning]);
                                        countEarning += value.totalEarning
                                    }
                                }
                            }

                            setEarning({
                                monthsName: tempMonths,
                                earningArray: tempEarningArray,
                                totalEarning: countEarning
                            })
                        } else {
                            let tempMonths = [], tempEarningArray = [], countEarning = 0;
                            for (let i = 0; i < monthNames.length; i++) {
                                if (i >= 6) {
                                    if (!currentYearData.hasOwnProperty(monthNames[i])) {
                                        tempMonths.push([monthNames[i].slice(0, 3)]);
                                        tempEarningArray.push(0);
                                    }
                                    else {
                                        for (const [key, value] of Object.entries(currentYearData)) {
                                            if (key == monthNames[i]) {
                                                // console.log(`${key}: ${value.totalEarning}`);
                                                tempMonths.push([key.slice(0, 3)]);
                                                tempEarningArray.push([value.totalEarning]);
                                                countEarning += value.totalEarning

                                            }
                                        }
                                    }
                                }
                            }

                            setEarning({
                                monthsName: tempMonths,
                                earningArray: tempEarningArray,
                                totalEarning: countEarning
                            })
                        }
                    } else {
                        loading(false)
                    }
                } else {
                    loading(false)
                }
                loading(false)
            });
    } catch (error) {
        loading(false)
        console.log('catch error ->  ', error);
    }
}

export const minusEarning = async (currentBookingAmount, timeStamp) => {
    var
        currentDate = new Date(timeStamp),
        currentYearKey = currentDate.getFullYear(),
        currentMonthKey = monthNames[currentDate.getMonth()];

    try {
        const userDoc = await firestore().collection('Port Earning').doc(auth().currentUser.uid)

        userDoc.get()
            .then((docSnapshot) => {
                if (docSnapshot.exists) {
                    let data = docSnapshot.data();
                    if (data[currentYearKey]) {
                        let currentYearObject = data[currentYearKey];
                        if (currentYearObject[currentMonthKey]) {
                            let currentMonthObject = currentYearObject[currentMonthKey];
                            let previousAmount = currentMonthObject.totalEarning;
                            let newAmount = previousAmount - currentBookingAmount;
                            currentYearObject[currentMonthKey] = {
                                totalEarning: newAmount
                            }
                            let updatedEarningObject = {
                                [currentYearKey]: currentYearObject
                            }
                            userDoc.update({ ...updatedEarningObject });

                        }
                    }

                }
            });
    } catch (error) {
        console.log('catch error ->  ', error);
    }
};

export const addEarning = async (portId, newEarning, currentYearKey, currentMonthKey, currentBookingAmount) => {
    try {
        const userDoc = await firestore().collection('Port Earning').doc(portId)

        userDoc.get()
            .then((docSnapshot) => {
                if (docSnapshot.exists) {
                    let data = docSnapshot.data();
                    if (data[currentYearKey]) {
                        let currentYearObject = data[currentYearKey];
                        if (currentYearObject[currentMonthKey]) {
                            let currentMonthObject = currentYearObject[currentMonthKey];
                            let previousAmount = currentMonthObject.totalEarning;
                            let newAmount = previousAmount + currentBookingAmount;
                            currentYearObject[currentMonthKey] = {
                                totalEarning: newAmount
                            }
                            let updatedEarningObject = {
                                [currentYearKey]: currentYearObject
                            }
                            userDoc.update({ ...updatedEarningObject });

                        } else {

                            currentYearObject[currentMonthKey] = {
                                totalEarning: currentBookingAmount
                            }
                            let updatedEarningObject = {
                                [currentYearKey]: currentYearObject
                            }

                            userDoc.update({ ...updatedEarningObject });
                        }
                    } else {
                        userDoc.update({ ...newEarning });
                    }

                } else {
                    userDoc.set({
                        ...newEarning
                    }) // create the document
                }
            });
    } catch (error) {
        console.log('catch error ->  ', error);
    }
};

export const refundBookingAmount = async (refundUrl) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer sk_test_51LuF3BJlv8F912l7VFWEEiYWJi9wz6VjGNlyHqkcfsJ7Rg5TZIQUsgr5lnozTaWv9nxYdyV0KAO9svOJyJ3vH2ok00pmPJQ5DY");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch(`https://api.stripe.com${refundUrl}`, requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

}



