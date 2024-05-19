import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import MainCharacter from "./MainCharacter";
import ChattingContainer from "./ChattingContainer";

const Styledback = styled.div`
  width: 100vw;
  height: 100vw;
  border: none;
`;
// const CharacterWrap = styled.div`
//   position: relative;
//   right: 0;
// `;
// const ChattingWrap = styled.div`
//   position: relative;
//   left: 0;
// `;
function MainPage() {
  return (
    <Styledback>
      <ChattingContainer></ChattingContainer>
      <MainCharacter></MainCharacter>
    </Styledback>
  );
}

export default MainPage;
