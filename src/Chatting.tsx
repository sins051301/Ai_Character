import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { userState } from "./recoil/ChattingAtom";
import { ReactElement, useEffect, useState } from "react";
import FetchData from "./utils/FetchData";
import styled from "styled-components";
import { User } from "../src/configs/CharacterInterface";
import { chatState } from "./recoil/StateAtom";
const Styledfont = styled.div`
  color: green;
`;

function Chatting() {
  const [user, setUser] = useRecoilState<User>(userState);
  const [chat, setChat] = useRecoilState<boolean>(chatState);
  useEffect(() => {

    console.log(22222);
    console.log(user.chat);
    const timer = setTimeout(() => {
      setChat(false);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [chat, user]);
  return <Styledfont>{user.chat}</Styledfont>;
}

export default Chatting;
