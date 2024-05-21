import { Link } from "react-router-dom";
import { customState } from "../recoil/CustomAtom";
import styled from "styled-components";
import { useRecoilState } from "recoil";

interface IMG {
  id: number;
  url: string;
}
const urls: IMG[] = [
  {
    id: 0,
    url: "./img/0/happy.png",
  },
  {
    id: 1,
    url: "./img/1/happy.png",
  },
  {
    id: 2,
    url: "./img/2/happy.png",
  },
];

interface BackgroundButtonProps {
  imageUrl?: string;
}

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

const BackgroundWrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  position: relative;
  grid-template-columns: repeat(3, 1fr);
`;

const BackgroundButton = styled.button<BackgroundButtonProps>`
  background: url(${(props) => props.imageUrl}) center;
  height: 100vh;
`;

function CustomPage() {
  const [custom, setCustom] = useRecoilState(customState);
  function customClick(id: number) {
    setCustom(id);
  }

  return (
    <BackgroundWrap>
      <CustomButton to="/">나가기</CustomButton>
      {urls.map((data, index) => {
        return (
          <BackgroundButton imageUrl={data.url} key={index} onClick={()=>customClick(data.id)}></BackgroundButton>
        );
      })}
      {/* <BackgroundButton imageUrl="./img/angry.pn"></BackgroundButton>
      <BackgroundButton imageUrl="./img/angry.pn"></BackgroundButton>
      <BackgroundButton imageUrl="./img/angry.pn"></BackgroundButton> */}
    </BackgroundWrap>
  );
}

export default CustomPage;
