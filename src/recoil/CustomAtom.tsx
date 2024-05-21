import { atom } from "recoil";

export const customState = atom({
  key: "customState", // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});
