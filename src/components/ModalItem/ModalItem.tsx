import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Container,
  ModalItemImage,
  ModalItemName,
  NameContainer,
  Price,
  PriceContainer,
  QuantityLabel,
} from "./ModalItem.styled";

interface ModalItemProps {
  itemName: String;
  image: String;
  quantity: Number;
  total: Number;
}

const ModalItem = ({ itemName, image, quantity, total }: ModalItemProps) => {
  return (
    <Container>
      <View>
        <ModalItemImage source={{ uri: image, width: 100, height: 100 }} />
      </View>
      <NameContainer>
        <ModalItemName>{itemName}</ModalItemName>
        <QuantityLabel>
          Quantity: <Text style={{ color: "black", fontWeight: "bold" }}>{quantity}</Text>{" "}
        </QuantityLabel>
      </NameContainer>
      <PriceContainer>
        <Price>₦{total}</Price>
      </PriceContainer>
    </Container>
  );
};

export default ModalItem;

const styles = StyleSheet.create({});
