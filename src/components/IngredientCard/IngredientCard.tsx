import { View, Text } from "react-native";
import React from "react";
import { Container } from "./IngredientCard.styled";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const IngredientCard = () => {
  return (
    <Container>
      <MaterialCommunityIcons name="cheese" size={40} color="#ffa600" />
    </Container>
  );
};

export default IngredientCard;
