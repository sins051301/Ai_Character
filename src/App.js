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

const StyledMainBack = styled.div`
  //background: rgba(0,0,0, 0);
  //width: 100vw;
  //height: 100vh;
`;

function App() {
  return (
    <RecoilRoot>
      <StyledMainBack>
        <MainPage></MainPage>
      </StyledMainBack>
    </RecoilRoot>
  );
}

export default App;
