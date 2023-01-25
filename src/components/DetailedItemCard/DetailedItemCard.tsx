import { View, Text, Image } from "react-native";
import React from "react";
import {
  Container,
  DetailsContainer,
  ItemImage,
  ItemName,
  Price,
  PriceContainer,
  Quantity,
} from "./DetailedItemCard.styled";

const DetailedItemCard = () => {
  return (
    <Container>
      <View>
        <ItemImage source={{ uri: "https://picsum.photos/200" }} />
      </View>
      <View>
        <DetailsContainer>
          <Quantity>x1</Quantity>
          <ItemName numberOfLines={2} ellipsizeMode="tail">
            Single Sausages Extra Stuffed
          </ItemName>
          <Price>₦1000</Price>
        </DetailsContainer>
        <PriceContainer></PriceContainer>
      </View>
    </Container>
  );
};

export default DetailedItemCard;
