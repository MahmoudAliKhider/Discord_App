import io from "socket.io-client";
import { sendPendungFriendinvitation } from "../Redux/actions/friendsAction";
import store from "../Redux/store";

let socket = null;

export const connectWithSocketServer = (userDetails) => {
    const jwtToken = userDetails.token;

    socket = io('http://localhost:5050', {
        auth: {
            token: jwtToken,
        }
    });

    socket.on('connect', () => {
        console.log('successfully connected with socket');
        console.log(socket.id);
    })

    socket.on("friends-invitations", (data) => {
        const { pendingInvitations } = data;
        console.log("friend invitation")
        console.log(pendingInvitations)
        store.dispatch(sendPendungFriendinvitation(pendingInvitations));
    })
}