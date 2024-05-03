import Canvas from "./Canvas.tsx";
import MainPage from "./MainPage.tsx";
import styled from "styled-components";

const StyledMainBack = styled.div`
   //background: rgba(0,0,0, 0);
   //width: 100vw;
   //height: 100vh;
`;


function App() {
  return (
    <StyledMainBack>
      <MainPage></MainPage>
    </StyledMainBack>
  );
}

export default App;
