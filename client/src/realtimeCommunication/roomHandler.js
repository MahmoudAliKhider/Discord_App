import { setOpenRoom } from '../Redux/actions/roomAction';
import store from '../Redux/store';

export const createNewRoom = () => {
    store.dispatch(setOpenRoom(true, true));
}