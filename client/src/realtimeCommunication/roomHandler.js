import { setOpenRoom, setRoomDetails, setActiveRoom } from '../Redux/actions/roomAction';
import store from '../Redux/store';
import * as socketConnection from "./socketConnection";

export const createNewRoom = () => {
    store.dispatch(setOpenRoom(true, true));
    socketConnection.createNewRoom();
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
            if (f.id === room.creatorId) {
                rooms.push({ ...room, creatorUsername: f.username })
            }
        })
    });

    store.dispatch(setActiveRoom(rooms));

}