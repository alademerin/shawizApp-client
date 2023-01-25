import styled from "styled-components";

export const Container = styled.View`
  margin-horizontal: 20px;
  flex-direction: row;
`;

export const ItemImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 10px;
`;

export const DetailsContainer = styled.View`
  margin-left: 10px;
  justify-content: center;
  /* background: red; */
  height: 100px;
  width: 240px;
`;

export const Quantity = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #b1b1b1;
`;

export const ItemName = styled(Quantity)`
  color: #421b39;
`;

export const PriceContainer = styled.View`
  justify-content: flex-end;
  margin-left: 15px;
`;

export const Price = styled.Text`
  color: #b1b1b1;
  font-size: 18px;
  font-weight: bold;
`;
