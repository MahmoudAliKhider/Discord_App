import { friendsAction } from "../actions/friendsAction";

const initState = {
    friends: [],
    pendingFriendsInvitations: [],
    onLineUser: []
}

const reducer = (state = initState, action) => {
    switch (action.action) {
        case friendsAction.SET_PENDING_FRIEND_INVITATION:
            return {
                ...state,
                pendingFriendsInvitations: action.pendingFriendsInvitations,
            }

        case friendsAction.SET_FRIEND:
            return {
                ...state,
                friends: action.friends
            }
        case friendsAction.SET_ONLINE_USER:
            return {
                ...state,
                onlineUser: action.onlineUser
            }

        default:
            return state
    }
}

export default reducer;