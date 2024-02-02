import React from 'react'
import { styled } from "@mui/system";
import FriendsListItem from './FriendsListItem';
import { useSelector } from "react-redux";

const MainContainer = styled('div')({
    flexGrow: 1,
    width: "100%",
});

const checkOnlineUser = (friends = [], onlineUsers = []) => {
    friends.forEach((f) => {
        const isUserOnline = onlineUsers.find((user) => user.userId === f.id);
        f.isOnline = isUserOnline ? true : false;
    })
    return friends;
}

const FriendsList = () => {
    const friends = useSelector((state) => state.friends.friends);
    const onlineUsers = useSelector((state) => state.friends.onlineUsers);

    return (

        <MainContainer>
            {checkOnlineUser(friends, onlineUsers).map((l) => (
                <FriendsListItem
                    username={l.username}
                    id={l.id}
                    key={l.id}
                    isOnline={l.isOnline}
                />
            ))
            }
        </MainContainer>
    )
}

export default FriendsList