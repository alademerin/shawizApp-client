import styled from "styled-components";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
export const Container = styled.View`
  /* background: green; */
  width: 150px;
  height: 220px;
  border-radius: 20px;
  position: relative;
  margin-right:10px
    margin-bottom:20px;
`;

export const ItemImage = styled.Image`
  width: 150px;
  height: 220px;
  border-radius: 20px;
`;

export const ItemName = styled.View`
  position: absolute;
  top: 0;
  width: 150px;
  height: 70px;
  z-index: 1;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background: white;
  opacity: 0.8;
  padding: 10px;
`;

export const ItemNameText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  /* background: red; */
  height: 55px;
`;
