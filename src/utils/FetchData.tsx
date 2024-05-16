import { userState } from "../recoil/ChattingAtom";
import { useRecoilState } from "recoil";
import { User } from "../configs/CharacterInterface";
import axios from "axios";


function FetchData() {


  
  const [user, setUser] = useRecoilState<User>(userState);
  axios.get("http://172.19.25.241:9145/contents/chloe_voice.wav")
    .then( (response:any) => {
      if (!response.ok) {
        throw new Error("서버에서 오디오 파일을 가져올 수 없습니다.");
      }
      console.log(11111);
      console.log(response);
      setUser({
        id: 0, // 사용자 id를 여기서 지정해야할지, 다른 곳에서 가져와야할지 판단 후 적절히 수정
        name: "", // 사용자 이름을 여기서 지정해야할지, 다른 곳에서 가져와야할지 판단 후 적절히 수정
        chat: response.output_text, // 가져온 데이터에서 채팅 텍스트를 사용하여 Recoil 상태 업데이트
        emotion: "", // 사용자 감정을 여기서 지정해야할지, 다른 곳에서 가져와야할지 판단 후 적절히 수정
      });
    })
    .catch((error) => {
      console.error("서버 요청 오류:", error);
    });
}

export default FetchData;
