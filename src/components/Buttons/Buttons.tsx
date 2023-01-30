import { View, Text } from "react-native";
import React from "react";
import { FavButtonContainer } from "./Buttons.styled";
import { AntDesign } from "@expo/vector-icons";

export const FavouriteButton = () => {
  return (
    <FavButtonContainer>
      <AntDesign name="heart" size={24} color="white" />
    </FavButtonContainer>
  );
};
