//import Canvas from "./Canvas.js";
import MainPage from "./MainPage.tsx";
import styled from "styled-components";
import { keyState } from "./recoil/KeyAtom.tsx";
import {Recorder} from 'react-voice-recorder';

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { useEffect,useState } from "react";
import { KeyEvent } from "./event/KeyEvent.tsx";
import { urlState, blobState } from "./recoil/AudioAtom.tsx";


const StyledMainBack = styled.div`
  //background: rgba(0,0,0, 0);
  //width: 100vw;
  //height: 100vh;
`;

function App() {
  const { KeyDown, KeyUp } = KeyEvent();
  const [isRecording, setIsRecording] = useState(false);
  const[keyE, _] = useRecoilState(keyState);

  const handleRecording = (data) => {
    console.log(data); // 여기서 녹음 데이터를 사용할 수 있습니다.
  };

  const startRecording = () => {
    setIsRecording(true);
  };

  const stopRecording = () => {
    setIsRecording(false);
  };

  useEffect(() => {
    window.addEventListener("keydown", KeyDown);
    window.addEventListener("keyup", KeyUp);
    if(keyE)
      startRecording();
    else{
      stopRecording();
      handleRecording();
    }
      
    return () => {
      window.removeEventListener("keydown", KeyDown);
      window.removeEventListener("keyup", KeyUp);
    };
  }, [keyE, isRecording]);

  console.log(keyE);
  return (
    <StyledMainBack>
      <MainPage>
      <Recorder
        record={isRecording}
        title={"Voice Recording"}
        onData={handleRecording}
        backgroundColor={"#f1f1f1"}
      />
      </MainPage>
    </StyledMainBack>
  );
}

export default App;
