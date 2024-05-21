import { userState } from "../recoil/ChattingAtom";
import { useRecoilState } from "recoil";
import { User } from "../configs/CharacterInterface";
import axios from "axios";
import { useEffect } from "react";

function FetchMockingData() {
  const [user, setUser] = useRecoilState<User>(userState);
  useEffect(() => {
    const fetchAudio = async () => {
      try {
        const response = await axios
          .get("/happy") // /contents/chloe_voice.wav
            setUser(response.data);
          //console.log(response.data);
      } catch (error) {
        console.error("서버 요청 오류:", error);
      }
    };
    fetchAudio();
  },[]);
}

export default FetchMockingData;
