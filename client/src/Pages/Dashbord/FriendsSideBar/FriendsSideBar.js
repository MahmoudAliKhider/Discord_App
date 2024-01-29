import React from 'react'
import { styled } from '@mui/system';
import AddFriendButton from './AddFriendButton';
import FriendsTitle from './FriendsTitle';
import FriendsList from './FriendsList/FriendsList';
import PendinginvitionList from './PendingInvitaionList/PendinginvitionList';

const MainContainer = styled('div')({
    width: "222px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#2F3136",
})
const FriendsSideBar = () => {
    return (
        <MainContainer>
            <AddFriendButton />
            <FriendsTitle title="Private Messages" />
            <FriendsList />
            <FriendsTitle title="Invitaions" />
            <PendinginvitionList />
        </MainContainer>
    )
}

export default FriendsSideBar