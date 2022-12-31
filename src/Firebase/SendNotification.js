let FirebaseServerKey = "AAAAPEr-aAs:APA91bHFmD8NgJalcguMn-VO_GahiqCotE_0fu34C3CSHtAU-J6T7yljsJOTmcEsfYqMZz9AT22W-oWnq1jMb_ozDBqvMzHxPSQ5_lz3FLIfV1wgTxPDwUsYGNAuZenYy-dUpM_uyQcK"


export const SendNotification = async (message) => {
    console.log("===>>> ", JSON.stringify(message))
    let headers = new Headers({
        "Content-Type": "application/json",
        Authorization: "key=" + FirebaseServerKey,
    })
    let response = await fetch("https://fcm.googleapis.com/fcm/send", {
        method: "POST",
        headers,
        body: JSON.stringify(message),
    })
    response = await response.json()
    console.log("check==> res ", response)
}

export default SendNotification

