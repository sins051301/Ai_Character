// src/mocks/handlers.ts

import { User } from "../configs/CharacterInterface";
import { http, HttpResponse, delay, passthrough } from "msw";

const datas: User[] = [
  {
    id: 0,
    name: "sin",
    chat: "Hello I'm huaksu!",
    emotion: "happy",
  },
  {
    id: 1,
    name: "sin",
    chat: "Hello I'm huaksu!",
    emotion: "sleepy",
  },
  {
    id: 2,
    name: "sin",
    chat: "Hello I'm huaksu!",
    emotion: "ashamed",
  },
];



export const chathandler = [

  http.get("/happy", async ()=> {
   
    await delay(2000);
    // Respond with the current data item in JSON format
    console.log(datas[0]);
    return HttpResponse.json(datas[0]);
    //return passthrough();
  }),
  http.get("/happy", async ()=> {
   
    await delay(4000);
    // Respond with the current data item in JSON format
    console.log(datas[1]);
    return HttpResponse.json(datas[1]);
  }),
  http.get("/happy", async ()=> {
   
    await delay(6000);
    // Respond with the current data item in JSON format
    console.log(datas[2]);
    return HttpResponse.json(datas[2]);
  }),
];

// export const chathandler = [
//   http.get("/happy", async () => {
//     // Initial delay to simulate server response time
  
//     for (const data of datas) {
//       await delay(2000); // 2초 지연
//       //await HttpResponse.json(data);
//       return (
//         HttpResponse.json(data)
//       );
//     }

//     // 마지막 응답을 보냅니다.
   
//   }),
// ];