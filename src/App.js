//import Canvas from "./Canvas.js";
import MainPage from "./pages/MainPage.tsx";
import styled from "styled-components";
import { keyState } from "./recoil/KeyAtom.tsx";
import { useAudioRecorder } from "react-audio-voice-recorder";
import axios from "axios";

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { Children, useEffect, useState } from "react";
import { KeyEvent } from "./event/KeyEvent.tsx";
import SendRecordingToServer from "./utils/SendRecordingToServer.jsx";
import FetchData from "./utils/FetchData.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CustomPage from "./pages/CustomPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <MainPage />,
      },
      {
        path: "/custom",
        element: <CustomPage />,
      },
    ],
  },
]);

function App() {
  const { KeyDown, KeyUp } = KeyEvent();
  //const [isRecording, setIsRecording] = useState(false);

  const playBlob = (blob) => {
    if (!blob) return;

    const audioUrl = URL.createObjectURL(blob);
    const audio = new Audio(audioUrl);
    audio.play();
  };

  const [keyE, _] = useRecoilState(keyState);
  const {
    startRecording,
    stopRecording,
    togglePauseResume,
    recordingBlob,
    isRecording,
    isPaused,
    recordingTime,
    mediaRecorder,
  } = useAudioRecorder();

  useEffect(() => {
    window.addEventListener("keydown", KeyDown);
    window.addEventListener("keyup", KeyUp);

    if (keyE) startRecording();
    else {
      stopRecording();
      if (!recordingBlob) return;
      else {
        SendRecordingToServer(recordingBlob);
        //FetchData();
      }
    }

    return () => {
      window.removeEventListener("keydown", KeyDown);
      window.removeEventListener("keyup", KeyUp);
    };
  }, [keyE, recordingBlob]);

  console.log(keyE);
  return <RouterProvider router={router} />;
}

export default App;
