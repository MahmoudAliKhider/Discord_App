import { setLocalStream } from "../Redux/actions/roomAction";
import store from "../Redux/store";

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
