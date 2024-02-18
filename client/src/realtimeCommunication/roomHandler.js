import { setOpenRoom, setRoomDetails, setActiveRooms, setLocalStream, setRemoteStreams, setScreenSharingStream } from '../Redux/actions/roomAction';
import store from '../Redux/store';
import * as socketConnection from "./socketConnection";
import { closeAllConnection, getLocalStreamPreview } from './webRTChandler';
// import * as webRTChandler from "./webRTChandler";

export const createNewRoom = () => {
    const successCalbackFunc = () => {
        store.dispatch(setOpenRoom(true, true));
        socketConnection.createNewRoom();
    }
    const audioOnly = store.getState().room.audioOnly;

    getLocalStreamPreview(audioOnly, successCalbackFunc)
}

export const newRoomCreated = (data) => {
    const { roomDetails } = data;
    store.dispatch(setRoomDetails(roomDetails));
}

export const updateActiveRoom = (data) => {
    const { activeRooms } = data;

    const friends = store.getState().friends.friends;
    const rooms = [];

    activeRooms.forEach((room) => {
        friends.forEach((f) => {
            if (f.id === room.roomCreator.userId) {
                rooms.push({ ...room, creatorUsername: f.username })
            }
        })
    });

    store.dispatch(setActiveRooms(rooms));

}

export const joinRoom = (roomId) => {
    const successCalbackFunc = () => {
        store.dispatch(setRoomDetails({ roomId }));
        store.dispatch(setOpenRoom(false, true));
        socketConnection.joinRoom({ roomId });
    }
    const audioOnly = store.getState().room.audioOnly;

    getLocalStreamPreview(audioOnly, successCalbackFunc)
}

export const leaveRoom = () => {
    const roomId = store.getState().room.roomDetails.roomId;

    const localStream = store.getState().room.localStream;
    if (localStream) {
        localStream.getTracks().forEach(track => track.stop());
        store.dispatch(setLocalStream(null))
    }

    const screenSharingStream = store.getState().room.screenSharingStream;
    if(screenSharingStream){
        screenSharingStream.getTracks().forEach((track) => track.stop());
        store.dispatch(setScreenSharingStream(null))
    }
    store.dispatch(setRemoteStreams([]));
    closeAllConnection();

    socketConnection.leaveRoom({ roomId });
    store.dispatch(setRoomDetails(null));
    store.dispatch(setOpenRoom(false, false))
}
