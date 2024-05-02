import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { useState } from "react";

const Styledback = styled.div`
  width: 15vw;
  height: 40vw;
  position: fixed;
  bottom: 0;
  right: 0;
  text-align: center;
`;

const Styledimg = styled.img`
  width: 15vw;
  height: 35vw;
  border-radius: 10px;
`

function MainCharacter() {
  const [isVisible, setVisible] = useState<boolean>(false);
  const [emotion, setemotion] = useState<string>("happy");

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
            <Styledimg
              src={`./img/${emotion}.jpg`}
              alt="img"
            />
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
