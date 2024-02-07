import { setOpenRoom,setRoomDetails } from '../Redux/actions/roomAction';
import store from '../Redux/store';
import * as socketConnection from "./socketConnection";

export const createNewRoom = () => {
    store.dispatch(setOpenRoom(true, true));
    socketConnection.createNewRoom();
}

export const newRoomCreated = (data) =>{
    const {roomDetails} = data;
    store.dispatch(setRoomDetails(roomDetails));
}