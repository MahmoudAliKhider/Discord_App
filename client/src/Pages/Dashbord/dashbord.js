import React, { useEffect } from "react";
import { styled } from "@mui/system";
import SideBar from "./SideBar/SideBar";
import FriendsSideBar from "./FriendsSideBar/FriendsSideBar";
import Messenger from "./Messanger/Messanger";
import AppBar from "./AppBar/AppBar";
import { Logout } from "../../utils/auth";
import { useSelector, useDispatch } from "react-redux";
import { getActions } from "../../Redux/actions/authAction";
import { connectWithSocketServer } from "../realtimeCommunication/socketConnection";

const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
});

const Dashboard = () => {
  const dispatch = useDispatch();
  const { setUserDetails } = getActions(dispatch); 

  useEffect(() => {
    const userDetails = localStorage.getItem("user");

    if (!userDetails) {
      Logout();
    } else {
      setUserDetails(JSON.parse(userDetails)); 
      connectWithSocketServer();
    }
  }, []);

  const userDetails = useSelector((state) => state.auth.userDetails);

  return (
    <Wrapper>
      <SideBar />
      <FriendsSideBar />
      <Messenger />
      <AppBar />
    </Wrapper>
  );
};

export default Dashboard;
