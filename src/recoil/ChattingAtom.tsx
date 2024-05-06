import { atom, selector } from "recoil";


export interface User{
  id: number;
  name: string;
  chat: string;
  
}

export const textState = atom<User>({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: {
    id: 0,
    name: "default name",
    chat: "default chat",
  }, 
});

// export const chatState = selector({
//   key: 'chatState', // unique ID (with respect to other atoms/selectors)
//   get: ({get}) => {
//     const text = get(textState);

//     return text.length;
//   },
// });