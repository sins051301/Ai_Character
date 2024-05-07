import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { userState } from "./recoil/ChattingAtom";
import { useState } from "react";
import { useRecoilState } from "recoil";
import {User} from "./configs/CharacterInterface";
const Styledback = styled.div`
  width: 40vw;
  height: 85vh;
  //position: fixed;
  //bottom: 0;
  //right: 0;
  text-align: center;
`;

const Styledimg = styled.img`
  width: 40vw;
  height: 80vh;
  border-radius: 10px;
`;

function MainCharacter() {
  const [isVisible, setVisible] = useState<boolean>(false);
  const [emotion, _] = useRecoilState(userState);

  function handleClick() {
    setVisible(!isVisible);
  }
  return (
    <div>
      <Styledback>
        <AnimatePresence initial={false}>
          {isVisible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              whileHover={{ scale: 1.2 }}
            >
              <Styledimg src={`./img/${emotion.emotion}.jpg`} alt="img" />
            </motion.div>
          )}
        </AnimatePresence>
        Ai bot
      </Styledback>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default MainCharacter;
