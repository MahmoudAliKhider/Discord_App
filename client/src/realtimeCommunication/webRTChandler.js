import Peer from "simple-peer";

import { setLocalStream } from "../Redux/actions/roomAction";
import { signalPeerData } from './socketConnection';
import store from "../Redux/store";

const getConfiguration = () => {
    const turnIceServers = null;
    if (turnIceServers) {

    } else {
        console.warn("USING ONLY STUE Server");
        return {
            iceServers: [
                {
                    urls: "stun:stun.l.google.com:19302"
                }
            ]
        }
    }
}

const onlyAudioConstrains = {
    audio: true,
    video: false,
}
const defaultConstraints = {
    video: true,
    audio: true,
}

export const getLocalStreamPreview = async (onlyAudio = false, callbackFunc) => {
    const constraints = onlyAudio ? onlyAudioConstrains : defaultConstraints;

    try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        store.dispatch(setLocalStream(stream));
        callbackFunc();
    } catch (error) {
        console.error('Error getting user media:', error);
    }
}

let peers = {};
export const prepareNewPeerConnection = (connUserSocketId, isInitiator) => {
    const localStream = store.getState().room.localStream;

    if (isInitiator) {
        console.log('Initiator')

    } else {
        console.log(" not initiator")
    }
    peers[connUserSocketId] = new Peer({
        initiator: isInitiator,
        config: getConfiguration(),
        stream: localStream,
    });

    peers[connUserSocketId].on('signal', (data) => {
        const signalData = {
            signal: data,
            connUserSocketId: connUserSocketId,
        }

        signalPeerData(signalData);
    })

    peers[connUserSocketId].on("stream", (remoteStream) => {

        console.log("remotestream");
    })
}

export const handleSignalingData = (data) =>{
    const { connUserSocketId , signal} = data;
    if(peers[connUserSocketId]){
        peers[connUserSocketId].signal(signal);
    }
}