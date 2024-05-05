import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { textState } from "./recoil/ChattingAtom";
function Chatting() {
  const [text, setText] = useRecoilState(textState);
  //const text = useRecoilValue(); 분리해서 사용가능
  //const setext = useSetRecoilState();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return <div>
    {text}
  </div>
}

export default Chatting;
