import styled from "styled-components";

export const Container = styled.View`
  margin-horizontal: 20px;
  border-bottom-width: 1px;
  border-color: #ddd;
  /* height: 125px; */
  border-radius: 5px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  /* background: red; */
`;

export const BasketImage = styled.Image`
  border-radius: 5px;
`;
export const RowContainer = styled.View`
  flex-direction: row;
`;

export const DetailsContainer = styled.View`
  max-width: 200px;
  /* background: pink; */
`;

export const ItemName = styled.Text`
  font-size: 18px;
  color: #421b39;
  /* background: red; */
  font-weight: bold;
  margin-left: 10px;
`;

export const Price = styled.Text`
  font-size: 20px;
  /* color: #421b39; */
  font-weight: bold;
  margin-left: 10px;
`;
export const Quantity = styled.Text`
  font-size: 20px;
  color: #421b39;
  font-weight: bold;
  margin-right: 10px;
`;
