import Canvas from "./Canvas.tsx";
import MainPage from "./MainPage.tsx";
import styled from "styled-components";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { useEffect } from "react";
import { KeyEvent } from "./event/KeyEvent.tsx";
import { keyState } from "./recoil/KeyAtom.tsx";

const StyledMainBack = styled.div`
  //background: rgba(0,0,0, 0);
  //width: 100vw;
  //height: 100vh;
`;


function App() {
  const { KeyDown, KeyUp } = KeyEvent();
  useEffect(() =>{
    window.addEventListener('keydown',KeyDown);
    window.addEventListener('keyup', KeyUp);
   
    return ()=>{
      window.removeEventListener('keydown', KeyDown);
      window.removeEventListener('keyup', KeyUp);
    }
  }, [keyState]);
  console.log(keyState);
  return (
  
      <StyledMainBack>
        <MainPage></MainPage>
      </StyledMainBack>
  
  );
}

export default App;
