import styled from "styled-components";

export const Container = styled.View`
  margin-horizontal: 20px;
  border-width: 1px;
  border-color: #ddd;
  height: 125px;
  border-radius: 15px;
  padding: 10px 20px;
  margin-bottom: 10px;
`;

export const RowContainer = styled.View`
  flex-direction: row;
`;

export const DetailsContainer = styled.View`
  width: 200px;
  /* background: red; */
`;

export const ItemName = styled.Text`
  font-size: 18px;
  color: #421b39;
  font-weight: bold;
  margin-left: 10px;
`;

export const Price = styled.Text`
  font-size: 25px;
  color: #421b39;
  font-weight: bold;
  margin-left: 10px;
`;
export const Quantity = styled.Text`
  font-size: 22px;
  color: #421b39;
  font-weight: bold;
  margin-right: 10px;
`;
