import { View, Text } from "react-native";
import React from "react";
import {
  AddtoBasketButtonContainer,
  BasketButtonContainer,
  CounterContainer,
  FavButtonContainer,
  IconContainer,
  IncrementDecrementBtnContainer,
  OrderNowBtnContainer,
  OrderNowBtnText,
  Price,
  PriceContainer,
  QuantityButtonContainer,
  QuantityText,
} from "./Buttons.styled";
import { AntDesign, Ionicons } from "@expo/vector-icons";

export const FavouriteButton = () => {
  return (
    <FavButtonContainer>
      <AntDesign name="heart" size={24} color="white" />
    </FavButtonContainer>
  );
};

const QuantityCounter = () => {
  return (
    <CounterContainer>
      <IconContainer>
        <AntDesign name="minus" size={20} color="white" />
      </IconContainer>
      <QuantityText>1</QuantityText>
      <IconContainer>
        <AntDesign name="plus" size={20} color="white" />
      </IconContainer>
    </CounterContainer>
  );
};
export const AddToBasketButton = () => {
  return (
    <AddtoBasketButtonContainer>
      <PriceContainer>
        <Price>₦1500</Price>
      </PriceContainer>

      <QuantityButtonContainer>
        <QuantityCounter />
        <BasketButtonContainer>
          <Ionicons name="basket" size={35} color="#F66B01" />
        </BasketButtonContainer>
      </QuantityButtonContainer>
    </AddtoBasketButtonContainer>
  );
};

export const PlusMinusButton = () => {
  return (
    <IncrementDecrementBtnContainer>
      <AntDesign name="plus" size={24} color="#fff" />
    </IncrementDecrementBtnContainer>
  );
};

export const OrderNowButton = () => {
  return (
    <OrderNowBtnContainer>
      <OrderNowBtnText>Order Now</OrderNowBtnText>
    </OrderNowBtnContainer>
  );
};
