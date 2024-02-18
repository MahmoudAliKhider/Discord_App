import Peer from "simple-peer";

import { setLocalStream, setRemoteStreams } from "../Redux/actions/roomAction";
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

        remoteStream.connUserSocketId = connUserSocketId;
        addNewRemoteStream(remoteStream);
    })
}

export const handleSignalingData = (data) => {
    const { connUserSocketId, signal } = data;
    if (peers[connUserSocketId]) {
        peers[connUserSocketId].signal(signal);
    }
}

const addNewRemoteStream = (remoteStream) => {
    const remoteStreams = store.getState().room.remoteStreams;
    const newRemoteStreams = [...remoteStreams, remoteStream];

    store.dispatch(setRemoteStreams(newRemoteStreams))
}

export const closeAllConnection = () => {
    Object.entries(peers).forEach((mappedObject) => {
        const connUserSocketId = mappedObject[0];
        if (peers[connUserSocketId]) {
            peers[connUserSocketId].destroy();

            delete peers[connUserSocketId];
        }
    })
}

export const handleParticipantLeftRoom = (data) => {
    const { connUserSocketId } = data;
    if (peers[connUserSocketId]) {
        peers[connUserSocketId].destroy();

        delete peers[connUserSocketId];
    }
    const remoteStreams = store.getState().room.remoteStreams;

    const newRemoteStreams = remoteStreams.filter((remoteStream) =>
        remoteStream.connUserSocketId !== connUserSocketId
    )

    store.dispatch(setRemoteStreams(newRemoteStreams))
}