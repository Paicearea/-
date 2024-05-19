import styled from "styled-components";

const ListDiv = styled.div`
  display: flex;
  width: 831.209px;
  height: 71.209px;
  padding: 8px 32px;
  justify-content: center;
  align-items: center;
  gap: 488px;
  flex-shrink: 0;
  border-bottom: 1px solid var(--main-5, #abe2df);
`;
const ListTitle = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const ListImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55.209px;
  height: 55.209px;
  flex-shrink: 0;
  border-radius: 10px;
  background: var(--sub-2, #d1e2ef);
`;
export default function List({ title, img }) {
  return (
    <ListDiv>
      <ListTitle>{title}</ListTitle>
      <ListImg>
        <img src={img} alt="리스트이미지" />
      </ListImg>
    </ListDiv>
  );
}
