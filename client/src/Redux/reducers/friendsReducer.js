import { friendsActions } from "../actions/friendsAction";

const initState = {
    friends: [],
    pendingFriendsInvitations: [], 
    onlineUsers: [],
};


const reducer = (state = initState, action) => {
    switch (action.type) {
        case friendsActions.SET_PENDING_FRIENDS_INVITATION:
            return {
                ...state,
                pendingFriendsInvitations: action.pendingFriendsInvitations,
            }

        case friendsActions.SET_FRIEND:
            return {
                ...state,
                friends: action.friends
            }
        case friendsActions.SET_ONLINE_USER:
            return {
                ...state,
                onlineUser: action.onlineUser
            }

        default:
            return state
    }
}

export default reducer;