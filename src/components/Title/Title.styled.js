import styled from "styled-components";

export const Container = styled.View`
  /* background: yellow; */
  margin-horizontal: 20px;
`;

export const PageTitle = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #421b39;
  /* text-decoration: underline; */
  /* padding-bottom: 50px; */

  /* line-height: 3px; */
`;

export const Underline = styled.View`
  width: ${(props) => props.underline};
  height: 5px;
  background: #ffd700;
  margin-bottom: 20px;
`;
