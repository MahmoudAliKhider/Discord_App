import { setOpenRoom, setRoomDetails, setActiveRooms } from '../Redux/actions/roomAction';
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

    console.log(activeRooms)

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