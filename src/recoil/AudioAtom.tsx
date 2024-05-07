import { atom } from "recoil";

export const urlState = atom({
  key: "urlState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

export const recorderState = atom({
    key: "recorderState", // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
  });


export const blobState = atom({
    key: "blobState", // unique ID (with respect to other atoms/selectors)
    default: "", // default value (aka initial value)
  });

export const recordingState = atom({
    key: "recordingState", // unique ID (with respect to other atoms/selectors)
    default: "", // default value (aka initial value)
  });
