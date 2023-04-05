import { View, Text, Image } from "react-native";
import React from "react";
import { Container, Gradient, ItemImage, ItemName, ItemNameText } from "./ItemCard/ItemCard.styled";
import TouchableScale from "react-native-touchable-scale";

interface ItemCardProps {
  name: String;
  image: String;
  itemCardPressed:()=>void
}

const ItemCard = ({ name, image, itemCardPressed }: ItemCardProps) => {
  return (
    <TouchableScale activeScale={0.95} onPress={itemCardPressed}>
      <Container>
        <ItemName>
          <ItemNameText numberOfLines={3} ellipsizeMode="tail">
            {name}
          </ItemNameText>
        </ItemName>
        <ItemImage
          source={{
            uri: image,
          }}
        />
      </Container>
    </TouchableScale>
  );
};

export default ItemCard;
