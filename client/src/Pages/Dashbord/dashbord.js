import React from 'react';
import { styled } from '@mui/system';
import SideBar from './SideBar/SideBar';
import FriendsSideBar from './FriendsSideBar/FriendsSideBar';
import Messanger from './Messanger/Messanger';
import AppBar from './AppBar/AppBar';

const Wrapper = styled('dev')({
  width: '100%',
  height: '100vh',
  display: 'flex',
})
const Dashboard = () => {
  return <Wrapper>
    <SideBar />
    <FriendsSideBar />
    <Messanger />
    <AppBar />
  </Wrapper>
}

export default Dashboard;