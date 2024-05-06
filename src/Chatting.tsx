import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { textState } from "./recoil/ChattingAtom";
import { ReactElement, useEffect, useState } from "react";
import styled from "styled-components";

const Styledfont = styled.div`
  color: green;
  
`;

function Chatting() {
  const [text, setText] = useRecoilState(textState);
  //const [loading, setLoading] = useState(true);
  //const text = useRecoilValue(); 분리해서 사용가능
  //const setext = useSetRecoilState();
  // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setText(e.target.value);
  // };
  useEffect(() => {
    fetch('http://localhost:3000/hi') // MSW를 통해 요청을 보냅니다.
      .then((response) => {return response.json()})
      .then((data) => {
        setText(data); // 받은 데이터를 상태로 설정합니다.
      }).catch((error) =>{
        console.log("수신 실패");
      })
  }, []);
  console.log(text.chat);
  return <Styledfont>{text.chat}</Styledfont>;
}

export default Chatting;
