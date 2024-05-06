import { atom, selector } from "recoil";
import { LocalStorageEffect } from "./LocalStorageEffect";
import {User} from "../configs/CharacterInterface";

export const userState = atom<User>({
  key: "userState", // unique ID (with respect to other atoms/selectors)
  default: {
    id: 0,
    name: "default name",
    chat: "default chat",
    emotion: "default emotion",
  },
  effects: [
    //LocalStorageEffect('textState'),
    ({ onSet }) => {
      console.log("상태 변화");
    },
  ],
});

// export const chatState = selector({
//   key: 'chatState', // unique ID (with respect to other atoms/selectors)
//   get: ({get}) => {
//     const text = get(textState);

//     return text.length;
//   },
// });
