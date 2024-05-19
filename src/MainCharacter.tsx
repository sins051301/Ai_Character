import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { userState } from "./recoil/ChattingAtom";
import { useState } from "react";
import { User } from "./configs/CharacterInterface";

const Styledback = styled.div`
  width: 40vw;
  height: 85vh;
  //text-align: center;
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
  position: absolute;
  right: 0;
`;

const Styledimg = styled(motion.img)`
  width: 40vw;
  height: 80vh;
  border-radius: 10px;
`;

const characterMotion: any = {
  initial: { opacity: 1, y: 0 }, // 초기 투명도와 위치 설정
  animate: {
    opacity: 1, // 애니메이션 중에도 항상 보이도록 설정
    y: [0, 10, -10, 0], // 위아래로 움직이는 애니메이션
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "loop",
    },
  },
  exit: { opacity: 1, y: 0 }, // 종료 시에도 항상 보이도록 설정
};

function MainCharacter() {
  const [isVisible, setVisible] = useState<boolean>(true);
  const [emotion, _] = useRecoilState<User>(userState);

  function handleClick() {
    setVisible(!isVisible);
  }

  return (
    <div>
      <Styledback>
        <AnimatePresence>
          {isVisible && (
            <Styledimg
              key={emotion.emotion}
              src={`./img/${emotion.emotion}.png`}
              alt="img"
              variants={characterMotion}
              initial="initial"
              animate="animate"
              exit="exit"
            />
          )}
        </AnimatePresence>
        <button onClick={handleClick}>Click me</button>
      </Styledback>
    </div>
  );
}

export default MainCharacter;
