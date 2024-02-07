import { setLocalStream } from "../Redux/actions/roomAction";
import store from "../Redux/store";

const onlyAudioConstrains = {
    audio: true,
    video: false,
}
const defaultConstraints = {
    audio: true,
    video: true,
}

export const getLocalStreamPreview = (onlyAudio = false, callbackFunc) => {

    const constraints = onlyAudio ? onlyAudioConstrains : defaultConstraints;

    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
        store.dispatch(setLocalStream(stream))
        callbackFunc();
    }).catch((error) => {
        console.log(error);
        console.log("Cannot get an access to local stream ")
    });
}