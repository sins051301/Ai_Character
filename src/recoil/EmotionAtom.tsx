import { atom } from "recoil";

export const emotionState = atom({
  key: "imgState", // unique ID (with respect to other atoms/selectors)
  default: "happy", // default value (aka initial value)
});
