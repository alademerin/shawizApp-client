import styled from "styled-components";

import { BlurView } from "expo-blur";

export const FavButtonContainer = styled.View`
  background: #f9545d;
  /* padding: 10px; */
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  position: absolute;
  bottom: -25px;
  right: 45px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const OrderButtonContainer = styled.View`
  flex-direction: row;
  background: rgb(246, 107, 1);
  bottom: 0;
  margin-horizontal: 10px;
  height: 70px;
  border-radius: 50px;
  align-items: center;
`;
export const PriceContainer = styled.View`
  bakground: red;
  justify-content: center;
  height: 70px;
`;

export const Price = styled.Text`
  font-size: 20px;
  color: white;
  bakground: white;
  font-weight: bold;
  margin-left: 30px;
`;

export const CounterContainer = styled.View`
  border-width: 1px;
  height: 50px;
  width: 100px;
  border-radius: 50px;
  border-color: white
`;
