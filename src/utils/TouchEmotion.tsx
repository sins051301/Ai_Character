import { useRecoilState } from "recoil";
import { userState } from "../recoil/ChattingAtom";
import { useEffect, useState } from "react";
import { clickState } from "../recoil/ClickAtom";
import { User } from "../configs/CharacterInterface";

function TouchEmotion() {
  const [emotion, setEmotion] = useRecoilState<User>(userState);
  const [count, setCount] = useRecoilState(clickState);
  useEffect(()=>{
    console.log(count);
    if (count >= 10 && count <20) {
      setEmotion((user) => ({
        ...user,
        emotion: "angry",
      }));
    } else if (count >= 20 && count < 30) {
      setEmotion((user) => ({
        ...user,
        emotion: "soangry",
      }));
    } else if (count >= 30 && count < 100) {
      setEmotion((user) => ({
        ...user,
        emotion: "crying",
      }));
      const timer = setTimeout(() => {
        setEmotion((user) => ({
          ...user,
          emotion: "happy",
        }));
        setCount(0);
      }, 5000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [count])

}

export default TouchEmotion;
