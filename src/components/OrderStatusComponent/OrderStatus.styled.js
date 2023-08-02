import styled from "styled-components";

export const MainContainer = styled.View`
  /* align-items: center; */
`;

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* background: red; */
`;

export const StatusTextView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const CircleBorder = styled.View`
  border-radius: 100px;
  width: 30px;
  height: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-width: 3px;
  /* border-color: #b1b1b1; */
  border-color: ${({ checked }) => (checked ? "#34be82" : "#b1b1b1")};
`;
export const Circle = styled.View`
  border-radius: 100px;
  width: 20px;
  height: 20px;
  background: ${({ checked }) => (checked ? "#34be82" : "#b1b1b1")};
`;

export const StatusContainer = styled.View`
  flex-direction: column;
  align-items: center;
`;
export const Line = styled.View`
  height: 3px;
  width: 50px;
  /* background: #b1b1b1; */
  background: ${({ checked }) => (checked ? "#34be82" : "#b1b1b1")};
`;
