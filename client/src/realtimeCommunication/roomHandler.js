import { setOpenRoom } from '../Redux/actions/roomAction';
import store from '../Redux/store';
import * as socketConnection from "./socketConnection";

export const createNewRoom = () => {
    store.dispatch(setOpenRoom(true, true));
    socketConnection.createNewRoom();
}