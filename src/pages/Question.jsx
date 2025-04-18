import { useState } from "react";
import { useNavigate, createSearchParams } from "react-router-dom"; // createSearchParams : 쿼리값이 가져야할 key와 value를 만들어주는 함수
import styled from "styled-components";
import { ProgressBar, Button } from "react-bootstrap";
import { questionData } from "../assets/questiondata";

// 스타일
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url("https://cat-lab.co.kr/data/editor/2211/59b20390d3e9627ce40b23c9e9984d23_1669243031_888.jpg")
    center/cover no-repeat;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 98vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.div`
  font-size: 2.4rem;
  background: var(--accent);
  color: var(--light);
  padding: 10px 20px;
  border-radius: 30px;
  margin-bottom: 20px;
  //반응형
  @media screen and (max-width: 780px) {
    font-size: 2rem;
    padding: 6px 12px;
  }
`;
const ButtonGroup = styled.div`
  display: flex;
  text-align: center;
  gap: 14px;
  & > button[type="button"] {
    width: 400px;
    height: 200px;
    font-size: 2rem;
    padding: 10px 50px;
    border-radius: 50px;
    margin-top: 10px;
    background: var(--dark);
    border: none;
    &:hover {
      background: var(--accent);
    }
  }
  //반응형
  @media screen and (max-width: 780px) {
    flex-direction: column;
    padding: 10px;
    & > button[type="button"] {
      width: 100%;
      height: 100%;
      font-size: 2.4rem;
    }
  }
`;

//출력
const Question = () => {
  const [questionNo, setQuestionNo] = useState(0);
  const [totalScore, setTotalScore] = useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
  ]);

  const navigate = useNavigate();
  // 버튼 클릭 이벤트
  // const handleClickButtonA = (no, type) => {
  //   if (type === "EI") {
  //     const addScore = totalScore[0].score + no;
  //     const newObject = { id: "EI", score: addScore };
  //     totalScore.splice(0, 1, newObject);
  //   } else if (type === "SN") {
  //     const addScore = totalScore[1].score + no;
  //     const newObject = { id: "SN", score: addScore };
  //     totalScore.splice(1, 1, newObject);
  //   } else if (type === "TF") {
  //     const addScore = totalScore[2].score + no;
  //     const newObject = { id: "TF", score: addScore };
  //     totalScore.splice(2, 1, newObject);
  //   } else {
  //     const addScore = totalScore[3].score + no;
  //     const newObject = { id: "JP", score: addScore };
  //     totalScore.splice(3, 1, newObject);
  //   }
  //   setQuestionNo(questionNo + 1); //가중치값
  // };
  // const handleClickButtonB = (no, type) => {
  //   setQuestionNo(questionNo + 1); //가중치값
  // };

  const handleClickButton = (no, type) => {
    const newScore = totalScore.map((s) => (s.id === type ? { id: s.id, score: s.score + no } : s)); //값 업데이트 -> 신규배열 생성 -> 기존배열의 자리에 위치하게
    setTotalScore(newScore);
    if (questionData.length !== questionNo + 1) {
      setQuestionNo(questionNo + 1);
    } else {
      const mbti = newScore.reduce(
        (acc, curr) => acc + (curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)),
        "" // 초기값 acc(빈문자열) / 현재값 curr(newscore안에 개별 적인 객체 - 안에는 score존재)
      ); //파이널 값이
      navigate({ pathname: "/result", search: `?${createSearchParams({ mbti: mbti })}` }); // 12번쨰 문제가 끝나면 result페이지로 이동 // substring특정 값 이전까지
      // Query값의 key와 value정의 : createSearchParams값 안에 mbti키 생성 -> 우리가 생성한 값이 들어가게 됨
    }
  };
  // 프로그레스바 전체질문의 개수 questionData(분모) questionNo(분자)
  return (
    <Container>
      <ProgressBar striped variant="danger" now={(questionNo / questionData.length) * 100} />
      <Wrapper>
        <Title>{questionData[questionNo].title}</Title>
        <ButtonGroup>
          <Button variant="danger" onClick={() => handleClickButton(1, questionData[questionNo].type)}>
            {questionData[questionNo].answera}
          </Button>
          <Button variant="danger" onClick={() => handleClickButton(0, [questionNo].type)}>
            {questionData[questionNo].answerb}
          </Button>
        </ButtonGroup>
      </Wrapper>
    </Container>
  );
};

export default Question;
