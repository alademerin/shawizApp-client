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

export const AddtoBasketButtonContainer = styled.View`
  flex-direction: row;
  background: rgb(246, 107, 1);
  position: absolute;
  bottom: 15px;
  margin-horizontal: 10px;
  height: 60px;
  width: 350px;
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

export const IncrementDecrementBtnContainer = styled.View`
  background: #421b39;
  opacity: 0.5;
  width: 35px;
  height: 35px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin-right: 5px;
  /* border-width: 6px; */
  /* border-color: #000; */
`;
export const QuantityAndPriceContainer = styled.View`
  flex-direction: row;
  margin-top: 17px;
  align-items: center;
  justify-content: state-between;
  /* background: orange; */
`;
export const QuantityContainer = styled.View`
  margin-left: 50px;
  align-items: center;
  flex-direction: row;
`;

export const OrderNowBtnContainer = styled.View`
  background: #421b39;
  margin-horizontal: 20px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  flex-direction: row;
  /* position: absolute; */
  /* top;100; */
  /* padding-vertical: 10px; */
`;
export const OrderNowBtnText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;
export const OrderBtnIconContainer = styled.View`
  background: #fff;
  border-radius: 5px;
  padding: 3px;
  margin-left: 10px;
`;

export const AuthButtonContainer = styled.View`
  background: #421b39;
  margin-horizontal: 20px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const AuthButtonText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

