import { View, Text } from "react-native";
import React from "react";
import {
  CounterContainer,
  FavButtonContainer,
  OrderButtonContainer,
  Price,
  PriceContainer,
} from "./Buttons.styled";
import { AntDesign } from "@expo/vector-icons";

export const FavouriteButton = () => {
  return (
    <FavButtonContainer>
      <AntDesign name="heart" size={24} color="white" />
    </FavButtonContainer>
  );
};

const QuantityCounter = () => {
  return <CounterContainer></CounterContainer>;
};
export const OrderButton = () => {
  return (
    <OrderButtonContainer>
      <PriceContainer>
        <Price>₦1500</Price>
      </PriceContainer>
      <CounterContainer />
    </OrderButtonContainer>
  );
};
