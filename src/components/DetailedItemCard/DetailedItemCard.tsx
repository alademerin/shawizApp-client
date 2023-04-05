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
import TouchableScale from "react-native-touchable-scale";

interface Props {
  itemName: string;
  image: string;
  price: string;
}

const DetailedItemCard = ({ price, pressed, itemName, image }: props) => {
  return (
    <TouchableScale onPress={pressed} activeScale={0.95}>
      <Container>
        <View>
          <ItemImage source={{ uri: image }} />
        </View>
        <View>
          <DetailsContainer>
            <Quantity>x1</Quantity>
            <ItemName numberOfLines={2} ellipsizeMode="tail">
              {itemName}
            </ItemName>
            <Price>₦{price}</Price>
          </DetailsContainer>
          <PriceContainer></PriceContainer>
        </View>
      </Container>
    </TouchableScale>
  );
};

export default DetailedItemCard;
