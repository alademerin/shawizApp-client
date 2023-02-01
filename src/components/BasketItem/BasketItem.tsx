import { View, Image, Text } from "react-native";
import React from "react";
import {
  Container,
  DetailsContainer,
  ItemName,
  Price,
  Quantity,
  RowContainer,
} from "./BasketItem.styled";
import { PlusMinusButton } from "../Buttons/Buttons";
import { QuantityAndPriceContainer, QuantityContainer } from "../Buttons/Buttons.styled";

const BasketItem = () => {
  return (
    <Container>
      <RowContainer>
        <Image source={{ uri: "https://picsum.photos/200", width: 100, height: 100 }} />
        <DetailsContainer>
          <ItemName numberOfLines={2} ellipsizemode="middle">
            Single Sausage Extra Stuffed with Cheese
          </ItemName>
          <QuantityAndPriceContainer>
            <Price>₦10</Price>
            <QuantityContainer>
              <PlusMinusButton />
              <Quantity>1</Quantity>
              <PlusMinusButton />
            </QuantityContainer>
          </QuantityAndPriceContainer>
        </DetailsContainer>
      </RowContainer>
    </Container>
  );
};

export default BasketItem;
