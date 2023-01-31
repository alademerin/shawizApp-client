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
  height: 60px;
  border-radius: 50px;
  align-items: center;
  /* justify-content: center; */
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
  height: 40px;
  width: 130px;
  border-radius: 50px;
  border-color: white;
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: 10px;
  margin-top: 5px;
  /* align-content: center; */
`;

export const IconContainer = styled.View`
  /* background: red; */
  height: 100%;
  /* width: 50px; */
  justify-content: center;
  align-items: center;
`;

export const QuantityButtonContainer = styled.View`
  margin-left: 40px;
  flex-direction: row;
`;

export const QuantityText = styled.Text`
  color: white;
  font-size: 25px;
  margin-top: 5px;
`;

export const BasketButtonContainer = styled.View`
  background: white;
  border-radius: 10px;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;
