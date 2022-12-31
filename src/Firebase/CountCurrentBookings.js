import moment from "moment";
import { getBookings } from "./getBookings";

export const CountCurrentBookings = async (callBack) => {
    await getBookings('Port', () => { }).then(bookings => {
        let current = [];

        bookings != undefined ? bookings.map(booking => {
            if (booking != undefined) {
                if (
                    moment(booking?.bookingDetail?.time?.departureTime).isBefore(
                        moment(),
                        'day',
                    )
                ) {
                    // past.push(booking);
                    // pastEvents.push(eventOBJ)
                } else {
                    current.push(booking);
                }
            }
        }) : console.log("NO bookings match")
        callBack(current?.length)

    }).catch((err) => console.log("CountCurrentBookings =-> ", err))
};