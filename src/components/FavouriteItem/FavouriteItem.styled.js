import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";

export const Container = styled.View`
  margin-horizontal: 20px;
  flex-direction: row;
  /* background: red; */
`;

export const Image = styled.Image`
  border-radius: 5px;
`;

export const FavouriteItemDetails = styled.View`
  margin-left: 10px;
  width: 225px;
  /* background: yellow; */
`;

export const Name = styled.Text`
  font-size: 18px;
  color: #421b39;
  font-weight: bold;
`;

export const Heart = styled(Ionicons)`
  margin-top: 10px;
  /* align-self: flex-end; */
`;
