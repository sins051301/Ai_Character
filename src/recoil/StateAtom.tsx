import { atom} from "recoil";

export const chatState = atom({
  key: "chatState", // unique ID (with respect to other atoms/selectors)
  default: true, // default value (aka initial value)
});
