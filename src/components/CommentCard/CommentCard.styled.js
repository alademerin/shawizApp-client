import styled from "styled-components";
import { SubheaderText } from "../SubHeader/Subheader.styled";

export const Container = styled.View`
  margin-horizontal: 20px;
  flex-direction: row;
  margin-bottom: 20px;
  /* background: orange; */
`;

export const ImageContainer = styled.View`
  /* background: red; */
`;

export const Image = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 100px;
`;

export const CommentDetails = styled.View`
  margin-horizontal: 10px;
  /* background: green; */
  width: 270px;
`;

export const Name = styled(SubheaderText)`
  font-size: 20px;
  margin: 0;
`;
export const Date = styled.Text`
  color: #aaa;
  fontsize: 18px;
  font-weight: bold;
`;

export const Comment = styled.Text`
  color: #aaa;
  fontsize: 15px;
  margin-top: 5px;
  font-weight: bold;
`;

export const RatingsAndDateContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  /* background: red; */
`;
