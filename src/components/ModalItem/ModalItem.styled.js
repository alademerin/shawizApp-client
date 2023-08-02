import styled from "styled-components";

export const Container = styled.View`
  /* background: pink; */
  /* width: 100%; */
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
  padding-vertical: 5px;
  border-bottom-width: 1px;
  border-bottom-color: #f1f1f1;
  /* justify-content: space-between; */
`;

export const ModalItemImage = styled.Image`
  height: 40px;
  width: 40px;
  border-radius: 5px;
`;

export const NameContainer = styled.View`
  margin-left: 5px;
  /* background: teal; */
  width: 175px;
`;
export const ModalItemName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #421b39;
`;
export const QuantityLabel = styled.Text`
  color: #b1b1b1;
  font-size: 16px;
`;

export const PriceContainer = styled.View`
  justify-content: center;
  margin-left:10px;
`;

export const Price = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const ExitContainer = styled.View`
  /* background: red; */
  width: 290px;
  /* flex-direction: row; */
  /* flex: 1; */
  align-items: center;
  margin-top: 20px;
`;

export const ExitButton = styled.View`
  background: #421b39;
  padding: 8px 15px;
  border-radius: 5px;
`;

export const BtnText = styled.Text`
  color: #fff;
  font-size: 18px;
`;
