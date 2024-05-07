//import Canvas from "./Canvas.js";
import MainPage from "./MainPage.tsx";
import styled from "styled-components";
import { keyState } from "./recoil/KeyAtom.tsx";
import { useAudioRecorder } from 'react-audio-voice-recorder';

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
  //const [isRecording, setIsRecording] = useState(false);
  const[keyE, _] = useRecoilState(keyState);
  const {
    startRecording,
    stopRecording,
    togglePauseResume,
    recordingBlob,
    isRecording,
    isPaused,
    recordingTime,
    mediaRecorder
  } = useAudioRecorder();

  useEffect(() => {
    window.addEventListener("keydown", KeyDown);
    window.addEventListener("keyup", KeyUp);
    if(keyE)
      startRecording();
    else{
      stopRecording();
      if (!recordingBlob) return;
      console.log(recordingBlob);
    }
      
    return () => {
      window.removeEventListener("keydown", KeyDown);
      window.removeEventListener("keyup", KeyUp);
    };
  }, [keyE, recordingBlob]);

  console.log(keyE);
  return (
    <StyledMainBack>
      <MainPage>
      </MainPage>
    </StyledMainBack>
  );
}

export default App;
