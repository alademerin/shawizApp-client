import styled from "styled-components";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.View``;

export const ImageContainer = styled.View`
  /* background: red */
`;

export const ItemImage = styled.Image`
  width: 100%;
  height: 300px;
`;

export const ItemPageText = styled.Text`
  color: #b1b1b1;
  margin-horizontal: 20px;
  font-weight: bold;
`;

export const Blur = styled(BlurView)`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80px;
  /* width: 100px; */
  /* height: 100%; */
`;
export const Gradient = styled(LinearGradient)`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80px;
`;

export const ItemNameContainer = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80px;
  justify-content: center;
`;
export const ItemName = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: white;
  opacity: 0.7;
  margin-horizontal: 20px;
`;

export const ItemOrderButtonContainer = styled.View`
  position: fixed;
  bottom: 4px;
`;
