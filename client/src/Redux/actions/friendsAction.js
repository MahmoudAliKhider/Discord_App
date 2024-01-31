import { openAlertMessage } from "./alertAction";
import * as api from '../../api';

export const friendsActions = {
    SET_PENDING_FRIENDS_INVITATION: "FRIENDS.SET_PENDING_FRIEND_INVITATION",
    SET_FRIEND: "FRIENDS.SET_FRIEND",
    SET_ONLINE_USER: "FRIENDS.SET_ONLINE_USER",
};


export const getActions = (dispatch) => {
    return {
        sendFriendInvitation: (data, closeDialogehandler) => {
            dispatch(sendFriendInvitation(data, closeDialogehandler));
        }
    }
}

export const setPendingFriendsInvitations = (pendingFriendsInvitations) => {
    return {
      type: friendsActions.SET_PENDING_FRIENDS_INVITATION,
      pendingFriendsInvitations,
    };
  };

const sendFriendInvitation = (data, closeDialogehandler) => {
    return async (dispatch) => {
        const response = await api.sendFriendInvitation(data);
        if (response.error) {
            dispatch(openAlertMessage(response?.exception?.response?.data))
        }else{
          dispatch(openAlertMessage("Invetaion Has been Sent!"))
          closeDialogehandler();
        }
    }
}