import Chatting from "./Chatting";
import styled from "styled-components";
import { ReactElement } from "react";
const StyledChat = styled.div`
  position: relative;
  width: 40vw;
  height: 30vh;
  padding: 1px;
  background: #ffffff;
  -webkit-border-radius: 33px;
  -moz-border-radius: 33px;
  border-radius: 33px;
  text-align: center;

  &::after {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 15px 0 15px 15px;
    border-color: transparent #ffffff;
    display: block;
    width: 0;
    z-index: 1;
    right: -15px;
    top: 46px;
  }
`;

function ChattingContainer() {
  return (
    <StyledChat>
      <Chatting></Chatting>
    </StyledChat>
  );
}

export default ChattingContainer;
