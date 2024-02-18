import { setOpenRoom, setRoomDetails, setActiveRooms, setLocalStream, setRemoteStreams, setScreenSharingStream, setIsUserJoinedWithOnlyAudio } from '../Redux/actions/roomAction';
import store from '../Redux/store';
import * as socketConnection from "./socketConnection";
import { closeAllConnection, getLocalStreamPreview } from './webRTChandler';
// import * as webRTChandler from "./webRTChandler";

export const createNewRoom = () => {
    const successCalbackFunc = () => {
        store.dispatch(setOpenRoom(true, true));

        const audioOnly = store.getState().room.audioOnly;
        store.dispatch(setIsUserJoinedWithOnlyAudio(audioOnly))
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

    const userId = store.getState().auth.userDetails?._id;
    activeRooms.forEach((room) => {

        const isRoomCreatedByMe = room.roomCreator.userId === userId;
        if (isRoomCreatedByMe) {
            rooms.push({ ...room, creatorUsername: 'Me' })
        } else {
            friends.forEach((f) => {
                if (f.id === room.roomCreator.userId) {
                    rooms.push({ ...room, creatorUsername: f.username })
                }
            })
        }
    });

    store.dispatch(setActiveRooms(rooms));

}

export const joinRoom = (roomId) => {
    const successCalbackFunc = () => {
        store.dispatch(setRoomDetails({ roomId }));
        store.dispatch(setOpenRoom(false, true));
        const audioOnly = store.getState().room.audioOnly;
        store.dispatch(setIsUserJoinedWithOnlyAudio(audioOnly))
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
    if (screenSharingStream) {
        screenSharingStream.getTracks().forEach((track) => track.stop());
        store.dispatch(setScreenSharingStream(null))
    }
    store.dispatch(setRemoteStreams([]));
    closeAllConnection();

    socketConnection.leaveRoom({ roomId });
    store.dispatch(setRoomDetails(null));
    store.dispatch(setOpenRoom(false, false))
}
