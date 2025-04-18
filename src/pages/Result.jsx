import { useEffect, useState } from "react"; //사용자가 값을 넣었는데 새로고침을 해야만 값이 나오는 상황 방지 -> 무신사때 로그인시 새로고침해야 나오는 것처럼
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { resultdata } from "../assets/resultdata";

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
  line-height: 2rem;
  text-align: center;
`;

//출력
const Result = () => {
  const [resultData, setResultData] = useState("");

  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate("/"); //메인페이지로 이동
  };

  const [searchParams] = useSearchParams(); //배열 반환 -> 그 안에 searchParams라는 객체 존재
  const mbti = searchParams.get("mbti"); //mbti에 해당하는 쿼리 값 담기

  useEffect(() => {
    const result = resultdata.find((item) => item.best === mbti);
    setResultData(result);
  }, [mbti]); //mbti 리랜더링

  // console.log(resultData);
  // console.log(searchParams.get("mbti"));

  return (
    <Wrapper>
      <Header>예비집사 판별기</Header>
      <Contents>
        <Title>결과 보기🥸</Title>
        <LogoImg>
          <img className="rounded-circle" src={resultData.image} alt="메인캣이미지" />
        </LogoImg>
        <Desc>
          예비집사님과 찰떡궁합인 고양이는
          <br />
          {resultData.best}형 {resultData.name} 고양이 입니다.
        </Desc>
        <Button onClick={handleClickButton}>테스트 다시 시작하기</Button>
      </Contents>
    </Wrapper>
  );
};

export default Result;
