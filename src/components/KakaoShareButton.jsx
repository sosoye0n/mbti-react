// 마운트가 될 때마다 앱을 사용하는 사람의 정보를 알아야 함 -> kakaosharebutton에서 찾아와야하는 변경사항 감지 -> useEffect
import { useEffect } from "react";
import { Button } from "react-bootstrap";

const { Kakao } = window; //카카오 찾아오기 : 카카오 문법

const KakaoShareButton = () => {
  const url = "https://mbtireact.netlify.app/"; //netlify 배포주소
  const resultURL = window.location.href; //공유를 한 사람의 마지막페이지 = 리퍼러 ??
  console.log("test : ", url, resultURL);

  useEffect(() => {
    Kakao.cleanup(); //에러가 발생되지 않게끔(캐시값이나 ...) 리셋
    Kakao.init("7a4abe8ce21960eb0cf0f3e6b3a02b4d"); //초기값 - api key값
  }, []); //마운트가 될 떄 가져와야 -> []

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "오늘의 디저트",
        description: "아메리카노, 빵, 케익",
        imageUrl: "https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg",
        link: {
          mobileWebUrl: "https://developers.kakao.com",
          webUrl: "https://developers.kakao.com",
        },
      },
      itemContent: {
        profileText: "Kakao",
        profileImageUrl:
          "https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
        titleImageUrl:
          "https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
        titleImageText: "Cheese cake",
        titleImageCategory: "Cake",
        items: [
          {
            item: "Cake1",
            itemOp: "1000원",
          },
          {
            item: "Cake2",
            itemOp: "2000원",
          },
          {
            item: "Cake3",
            itemOp: "3000원",
          },
          {
            item: "Cake4",
            itemOp: "4000원",
          },
          {
            item: "Cake5",
            itemOp: "5000원",
          },
        ],
        sum: "총 결제금액",
        sumOp: "15000원",
      },
      social: {
        likeCount: 10,
        commentCount: 20,
        sharedCount: 30,
      },
      buttons: [
        {
          title: "웹으로 이동",
          link: {
            mobileWebUrl: "https://developers.kakao.com",
            webUrl: "https://developers.kakao.com",
          },
        },
        {
          title: "앱으로 이동",
          link: {
            mobileWebUrl: "https://developers.kakao.com",
            webUrl: "https://developers.kakao.com",
          },
        },
      ],
    });
  };
  return <Button onClick={shareKakao}>카카오톡 공유하기</Button>;
};

export default KakaoShareButton;
