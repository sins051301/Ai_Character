import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import MainCharacter from "../MainCharacter";
import ChattingContainer from "../ChattingContainer";
import { Link } from "react-router-dom";
const Styledback = styled.div`
  width: 100vw;
  height: 100vw;
  border: none;
`;

const CustomButton = styled(Link)`
  position: absolute;
  border: none;
  right: 0;
  top: 0;
  text-decoration: none;
  color: black;
  font-size: 0.8rem;
  background-color: pink;
  border-radius: 5px;
  padding: 1%;
`;

function MainPage() {
  return (
    <Styledback>
      <ChattingContainer></ChattingContainer>
      <MainCharacter></MainCharacter>
      <CustomButton to="/custom">커스텀</CustomButton>
    </Styledback>
  );
}

export default MainPage;
