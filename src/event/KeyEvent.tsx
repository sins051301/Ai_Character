import { keyState } from "../recoil/KeyAtom";
import { useRecoilState } from "recoil";

export function KeyEvent() {
  const [_, setKeyE] = useRecoilState(keyState); // _는 사용하지 않는 값이므로 무시합니다.

  const KeyDown = (e: Event) => {
    const keyboardEvent = e as KeyboardEvent; // 이벤트를 키보드 이벤트로 캐스팅
    if (keyboardEvent.key === "`") {
      setKeyE(true);
    }
  };

  const KeyUp = (e: Event) => {
    const keyboardEvent = e as KeyboardEvent; // 이벤트를 키보드 이벤트로 캐스팅
    if (keyboardEvent.key === "`") {
      setKeyE(false);
    }
  };

  return { KeyDown, KeyUp };
}