import { View, Text } from "react-native";
import React, { useState } from "react";
import {
  AddtoBasketButtonContainer,
  AuthButtonContainer,
  AuthButtonText,
  BasketButtonContainer,
  CounterContainer,
  FavButtonContainer,
  IconContainer,
  IncrementDecrementBtnContainer,
  OrderBtnIconContainer,
  OrderNowBtnContainer,
  OrderNowBtnText,
  Price,
  PriceContainer,
  QuantityButtonContainer,
  QuantityText,
} from "./Buttons.styled";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import TouchableScale from "react-native-touchable-scale";

export const FavouriteButton = () => {
  const [selected, setSelected] = useState(false);
  return (
    <TouchableScale onPress={() => setSelected(!selected)}>
      <FavButtonContainer>
        <AntDesign name="heart" size={24} color={selected ? "red" : "white"} />
      </FavButtonContainer>
    </TouchableScale>
  );
};

const QuantityCounter = ({quantity, minusPressed, plusPressed}) => {
  return (
    <CounterContainer>
      <TouchableScale onPress={minusPressed}>
      <IconContainer>
        <AntDesign name="minus" size={20} color="white" />
      </IconContainer>
      </TouchableScale>
      <QuantityText>{ quantity }</QuantityText>
      <TouchableScale onPress={plusPressed}>
      <IconContainer>
        <AntDesign name="plus" size={20} color="white" />
      </IconContainer>
      </TouchableScale>
    </CounterContainer>
  );
};
export const AddToBasketButton = ({ price, addToBasketPressed, quantity, minusPressed, plusPressed}) => {
  return (
    <AddtoBasketButtonContainer>
      <PriceContainer>
        <Price>₦{price}</Price>
      </PriceContainer>

      <QuantityButtonContainer>
        <QuantityCounter quantity={quantity} minusPressed={minusPressed} plusPressed={plusPressed} />
        <TouchableScale onPress={addToBasketPressed}>
          <BasketButtonContainer>
            <Ionicons name="basket" size={35} color="#F66B01" />
          </BasketButtonContainer>
        </TouchableScale>
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
      {/* <OrderBtnIconContainer> */}
      {/*   <Ionicons name="ios-list" size={24} color="black" /> */}
      {/* </OrderBtnIconContainer> */}
    </OrderNowBtnContainer>
  );
};

export const AuthButton = ({ title, authPressed }) => {
  return (
    <TouchableScale activeScale={0.95} onPress={authPressed}>
      <AuthButtonContainer>
        <AuthButtonText>{title}</AuthButtonText>
      </AuthButtonContainer>
    </TouchableScale>
  );
};
