// 마운트가 될 때마다 앱을 사용하는 사람의 정보를 알아야 함 -> kakaosharebutton에서 찾아와야하는 변경사항 감지 -> useEffect
import { useEffect } from "react";
import { Button } from "react-bootstrap";

const { Kakao } = window; //카카오 찾아오기 : 카카오 문법

// 함수
const KakaoShareButton = ({ data }) => {
  // console.log(data);// 무엇을 선택했는지 결과값 들어옴
  const url = "https://mbtireact.netlify.app/"; //netlify 배포주소
  const resultURL = window.location.href; //공유를 한 사람의 마지막페이지 = 리퍼러 ??
  // console.log("test : ", url, resultURL);

  useEffect(() => {
    Kakao.cleanup(); //에러가 발생되지 않게끔(캐시값이나 ...) 리셋
    Kakao.init("7a4abe8ce21960eb0cf0f3e6b3a02b4d"); //초기값 - api key값
    Kakao.isInitialized(); //초기화 여부 판단 함수
  }, []); //마운트가 될 떄 가져와야 -> []

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "예비집사 판별기 결과",
        description: `예비집사님이 고양이를 키운다면 잘 맞는 고양이는 ${data.name}입니다`,
        imageUrl: `$(url)${data.image}`,
        link: {
          webUrl: resultURL, //결과값
        },
      },
      buttons: [
        {
          title: "나도 테스트 하러가기",
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  };
  return <Button onClick={shareKakao}>카카오톡 공유하기</Button>;
};

export default KakaoShareButton;
