import styled from "styled-components";

const NewsContainer = styled.div`
  display: flex;
  width: 754.623px;
  height: 96px;
  justify-content: center;
  align-items: center;
  gap: 123.563px;
  flex-shrink: 0;
`;

const NewsContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const NewsBoard = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const NewsTitle = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 4px;
`;

const NewsContentText = styled.div`
  color: var(--Sub-Text, #797979);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 15px;
`;

const NewsImg = styled.div`
  width: 88.061px;
  height: 96px;
  flex-shrink: 0;
  border-radius: 10px;
  background: url(${(props) => props.image}) lightgray 50% / cover no-repeat,
    #d9d9d9;
`;

export default function News({ title, content, board, image }) {
  return (
    <NewsContainer>
      <NewsContentContainer>
        <NewsBoard>{board}</NewsBoard>
        <NewsTitle>{title}</NewsTitle>
        <NewsContentText>{content}</NewsContentText>
      </NewsContentContainer>
      <NewsImg>
        <img src={image} alt="뉴스이미지" />
      </NewsImg>
    </NewsContainer>
  );
}
