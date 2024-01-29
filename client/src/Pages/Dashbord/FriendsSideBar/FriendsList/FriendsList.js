import React from 'react'
import { styled } from "@mui/system";
import FriendsListItem from './FriendsListItem';

const DUMMY_FRIENDS = [
    {
        id: 1,
        username: "Mark",
        isOnline: true,
    },
    {
        id: 2,
        username: "Anna",
        isOnline: false,
    },
    {
        id: 3,
        username: "John",
        isOnline: false,
    },
];

const MainContainer = styled('div')({
    flexGrow: 1,
    width: "100%",
});

const FriendsList = () => {
    return (
        <MainContainer>
            {
                DUMMY_FRIENDS.map((l) => (
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