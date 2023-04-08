import { View, Image, Text } from "react-native";
import React from "react";
import {
  BasketImage,
  Container,
  DetailsContainer,
  ItemName,
  Price,
  Quantity,
  RowContainer,
} from "./BasketItem.styled";
import { PlusMinusButton } from "../Buttons/Buttons";
import { QuantityAndPriceContainer, QuantityContainer } from "../Buttons/Buttons.styled";

interface Props {
  name: String;
  price: Number;
  quantity: Number;
  image: String;
}

const BasketItem = ({ name, price, quantity, image }: Props) => {
  return (
    <Container>
      <RowContainer>
        <BasketImage source={{ uri: image, width: 100, height: 100 }} />
        <DetailsContainer>
          <ItemName numberOfLines={2} ellipsizemode="middle">
            {name}
          </ItemName>
          <QuantityAndPriceContainer>
            <Price>₦{price}</Price>
            <QuantityContainer>
              <PlusMinusButton />
              <Quantity>{quantity}</Quantity>
              <PlusMinusButton />
            </QuantityContainer>
          </QuantityAndPriceContainer>
        </DetailsContainer>
      </RowContainer>
    </Container>
  );
};

export default BasketItem;
