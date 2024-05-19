import styled from "styled-components";

const Title = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Subtitle = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export function TitleText({ text }) {
  return <Title>{text}</Title>;
}

export function SubtitleText({ text }) {
  return <Subtitle>{text}</Subtitle>;
}
