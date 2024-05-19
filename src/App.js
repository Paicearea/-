import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "./components/Button";
import News from "./components/News";
import List from "./components/List";
import { SubtitleText, TitleText } from "./components/Text";

function App() {
  return (
    <div>
      <Header type="isLogout" />
      <br />
      <Header type="isLogin" />
      <br />
      <Footer />
      <br />
      <Button text="버튼" />
      <br />
      <News
        board="로보뉴스"
        title="[리포트 브리핑] 삼성전자, ‘기회가 왔다’ 목표가 94,000원 "
        content="[서울 = 뉴스핌]  로보뉴스 = 한국 투자 증권에서 03일 삼성 전자에 대해  ‘기회가 왔다’라며 투자의견
        ‘매수(유지)’의 신규 리포트를 발행하였고, 목표가 94,000원으로 내놓았다..."
        image="./img/News.png"
      />
      <br />
      <List title="주식 기본 용어, 알고 시작하자!" img="./img/ListImg.png" />
      <br />
      <TitleText text="제목" />
      <SubtitleText text="부제목" />
    </div>
  );
}

export default App;
