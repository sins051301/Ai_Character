import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import MainCharacter from "./MainCharacter";
const Styledback = styled.div`
  width: 100vw;
  height: 100vw;
  border: none;
`;

function MainPage() {


  return (
    <Styledback>
      <MainCharacter></MainCharacter>
    </Styledback>
  );
}

export default MainPage;
