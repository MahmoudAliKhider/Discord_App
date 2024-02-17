import io from "socket.io-client";
import { setPendingFriendsInvitations, setFriends, setOnlineUsers } from "../Redux/actions/friendsAction";
import store from "../Redux/store";
import { updateDirectChatHistoryActive } from "../utils/chat";
import { newRoomCreated, updateActiveRoom } from "./roomHandler";
import { handleSignalingData, prepareNewPeerConnection } from "./webRTChandler";

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
        store.dispatch(setPendingFriendsInvitations(pendingInvitations));
    })

    socket.on("friends-list", (data) => {
        const { friends } = data;
        store.dispatch(setFriends(friends));
    })

    socket.on("online-users", (data) => {
        const { onlineUsers } = data;
        store.dispatch(setOnlineUsers(onlineUsers));
    })

    socket.on("direct-chat-history", (data) => {
        updateDirectChatHistoryActive(data);
    })

    socket.on("room-create", (data) => {
        newRoomCreated(data)
    })

    socket.on("active-rooms", (data) => {
        updateActiveRoom(data)
    })

    socket.on("conn-prepare", (data) => {
        const { connUserSocketId } = data;
        prepareNewPeerConnection(connUserSocketId, false);
        socket.emit('conn-init', { connUserSocketId: connUserSocketId });
    })

    socket.on("conn-init", (data) => {
        const { connUserSocketId } = data;
        prepareNewPeerConnection(connUserSocketId, true)
    })

    socket.on("conn-signal", (data) => {
        handleSignalingData(data);
    })
}

export const sendDirectMessage = (data) => {
    console.log(data);
    socket.emit("direct-message", data);
}

export const getDirectChatHistory = (data) => {
    socket.emit("direct-chat-history", data);
}

export const createNewRoom = () => {
    socket.emit("room-create");
}

export const joinRoom = (data) => {
    socket.emit("room-join", data);
}

export const leaveRoom = (data) => {
    socket.emit("room-leave", data);
};

export const signalPeerData = (data) => {
    socket.emit('conn-signal', data);
}
