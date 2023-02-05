import styled from "styled-components";

export const Container = styled.View`
  margin-horizontal: 20px;
  flex-direction: row;
  margin-bottom: 20px;
  /* background: green; */
  /* width: 267px; */
`;

export const Image = styled.Image`
  border-radius: 5px;
`;

export const OrderDetailsContainer = styled.View`
  margin-left: 10px;
  width: 220px;
  /* background: red; */
`;

export const OrderNumber = styled.Text`
  font-size: 15px;
  color: #b1b1b1;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const OrderName = styled.Text`
  font-size: 18px;
  color: #421b39;
  font-weight: bold;
`;

export const OrderStatus = styled.Text`
  font-size: 18px;
  color: #b1b1b1;
  font-weight: bold;
  margin-top: 5px;
`;
