import { atom } from "recoil";

export const keyState = atom({
  key: "keyState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
