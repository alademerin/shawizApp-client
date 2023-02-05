import { View, Text } from "react-native";
import React from "react";
import { Container, FavouriteItemDetails, Heart, Image, Name } from "./FavouriteItem.styled";
import { Ionicons } from "@expo/vector-icons";

const FavouriteItem = () => {
  return (
    <Container>
      <Image source={{ uri: "https://picsum.photos/199", width: 100, height: 100 }} />
      <FavouriteItemDetails>
        <Name numberOfLines={2} ellipsizeMode="tail">
          Double Saugsages with Cheese
        </Name>
        <Heart name="heart" size={30} color="red" />
      </FavouriteItemDetails>
    </Container>
  );
};

export default FavouriteItem;
