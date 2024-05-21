import { atom } from "recoil";

export const clickState = atom({
  key: "clickState", // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});
