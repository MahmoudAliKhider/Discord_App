import React from 'react'
import { styled } from "@mui/system";
import FriendsListItem from './FriendsListItem';
import { useSelector } from "react-redux";

const MainContainer = styled('div')({
    flexGrow: 1,
    width: "100%",
});

const FriendsList = () => {
    const friends = useSelector((state) => state.friends.friends);

    return (

        <MainContainer>
            {friends.map((l) => (
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