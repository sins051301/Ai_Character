import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { userState } from "./recoil/ChattingAtom";
import { ReactElement, useEffect, useState } from "react";
import styled from "styled-components";
import { User } from "../src/configs/CharacterInterface";
import { chatState } from "./recoil/StateAtom";
const Styledfont = styled.div`
  color: green;
`;

function Chatting() {
  const [text, setText] = useRecoilState<User>(userState);
  const [chat, setChat] = useRecoilState<boolean>(chatState);

  useEffect(() => {
    fetch("http://localhost:3000/hi")
      .then((response) => response.json())
      .then((data) => {
        setText(data);
      })
      .catch((error) => {
        console.log("수신 실패");
      });
      const timer = setTimeout(() => {
        setChat(false);
      }, 5000);
      return () => {
        clearTimeout(timer);
      };
  }, [chat]);
  return <Styledfont>{text.chat}</Styledfont>;
}

export default Chatting;
