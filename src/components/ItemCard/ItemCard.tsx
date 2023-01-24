import { View, Text, Image } from "react-native";
import React from "react";
import { Container, Gradient, ItemImage, ItemName, ItemNameText } from "./ItemCard/ItemCard.styled";

const ItemCard = () => {
  return (
    <Container>
      <ItemName>
        <ItemNameText numberOfLines={3} ellipsizeMode="tail">
          Single Sausages Extra Stuffed with Cheese
        </ItemNameText>
      </ItemName>
      <ItemImage
        source={{
          uri: "https://media.istockphoto.com/id/1286288597/photo/gyros-grilled-meat-slices-in-a-pita-bread-closeup-view.jpg?s=612x612&w=0&k=20&c=60mXtLpGp1rX2b_49oGlJ1v1UaLtS1PQTBnqD6iBc1M=",
        }}
      />
    </Container>
  );
};

export default ItemCard;
