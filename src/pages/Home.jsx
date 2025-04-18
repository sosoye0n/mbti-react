import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

//스타일
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--light);
  background: url("https://cdn.edujin.co.kr/news/photo/202105/35768_68227_247.jpg") center/cover no-repeat;
`;
const Header = styled.div`
  font-size: 4rem;
  color: var(--accent);
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;
const Contents = styled.div`
  color: var(--dark);
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  & > button[type="button"] {
    font-size: 2rem;
    padding: 10px 90px;
    border-radius: 50px;
    margin-top: 10px;
    background: var(--dark);
  }
`;
const Title = styled.div`
  font-size: 2.4rem;
`;
const LogoImg = styled.div`
  margin: 10px 0;
  & > img {
    width: 350px;
    height: 350px;
    object-fit: cover;
    border: 3px solid var(--accent);
    box-shadow: 4px 0px 10px rgba(118, 22, 202, 0.5);
    /* border-radius: 50%; */
  }
`;
const Desc = styled.div`
  font-size: 1.6rem;
  background: var(--accent);
  color: var(--light);
  padding: 10px 24px;
  border-radius: 20px;
`;

// 출력
const Home = () => {
  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate("/question");
  };

  return (
    <Wrapper>
      <Header>예비집사 판별기</Header>
      <Contents>
        <Title>나에게 맞는 집사는?🫡</Title>
        <LogoImg>
          <img className="rounded-circle" src="/cat/ggompang.jpeg" alt="메인캣이미지" />
        </LogoImg>
        <Desc>MBIT를 기반 나랑 잘 맞는 고양이 찾기</Desc>
        <Button onClick={handleClickButton}>테스트 시작하기</Button>
      </Contents>
    </Wrapper>
  );
};

export default Home;
