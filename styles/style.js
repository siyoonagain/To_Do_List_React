import styled from "@emotion/styled";

export const Wrap = styled.div`
  width: 548px;
  background: #fff;
  box-shadow: 2px 0 18px #000;
  margin: 54px auto;
  padding: 54px;
`;

export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 34px;
`;

export const Title = styled.h1`
  font-size: 54px;
  font-family: "Libre Bodoni", serif;
  text-align: center;
  color: #000;
`;

export const Day = styled.h2`
  font-size: 54px;
  font-family: "Libre Bodoni", serif;
`;

export const DateSmallC = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 14px;
`;
export const DateText = styled.h3`
  font-size: 24px;
  font-family: "Libre Bodoni", serif;
`;

export const ListContainer = styled.ul`
  list-style: none;
`;

export const List = styled.li`
  margin-bottom: 24px;
  font-size: 24px;
  display: flex;
  font-family: "Noto Sans KR", sans-serif;
`;

export const Input = styled.input`
  [type="checkbox"] {
    width: 30px;
    height: 30px;
  }
`;

export const Label = styled.label`
  font-size: 24px;
  margin-left: 24px;
  width: 200px;
`;

export const AddBtn = styled.button`
  width: 247px;
  height: 86px;
  font-size: 54px;
  margin: auto;
  padding: 5px 10px;
  border-radius: 60px;
  cursor: pointer;
  background: #3f4831;
  color: #fff;
  box-shadow: 0 4px 3px #00000040;
  transition: all 0.3s ease 0s;
  border: none;
  :hover {
    background: #000;
    color: #fff;
  }
`;

export const EditInput = styled.input`
  margin-left: 24px;
  font-size: 24px;
`;

export const ClickSpace = styled.div`
  width: 300px;
  text-align: right;
`;

export const ClickButton = styled.span`
  cursor: pointer;
`;

export const AddInput = styled.input`
  margin-bottom: 24px;
  width: 80%;
  line-height: 200%;
  padding: 8px 10px;
`;

export const AddSpace = styled.div`
  width: 100%;
  text-align: center;
`;
