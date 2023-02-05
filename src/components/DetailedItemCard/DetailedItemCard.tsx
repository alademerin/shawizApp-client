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
}

const DetailedItemCard = ({ pressed, itemName }: props) => {
  return (
    <TouchableScale onPress={pressed}>
      <Container>
        <View>
          <ItemImage source={{ uri: "https://picsum.photos/200" }} />
        </View>
        <View>
          <DetailsContainer>
            <Quantity>x1</Quantity>
            <ItemName numberOfLines={2} ellipsizeMode="tail">
              {itemName}
            </ItemName>
            <Price>₦1000</Price>
          </DetailsContainer>
          <PriceContainer></PriceContainer>
        </View>
      </Container>
    </TouchableScale>
  );
};

export default DetailedItemCard;
