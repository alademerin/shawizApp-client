import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Container, ItemImage, ItemPageText } from "./ItemScreen.styled";
import Title from "../../components/Title/Title";
import SubHeader from "../../components/SubHeader/SubHeader";
import IngredientCard from "../../components/IngredientCard/IngredientCard";

const ItemScreen = () => {
  return (
    <Container>
      <ItemImage
        source={{
          uri: "https://media.istockphoto.com/id/1286288597/photo/gyros-grilled-meat-slices-in-a-pita-bread-closeup-view.jpg?s=612x612&w=0&k=20&c=60mXtLpGp1rX2b_49oGlJ1v1UaLtS1PQTBnqD6iBc1M=",
        }}
      />
      <SubHeader text="About" />
      <ItemPageText>
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur
        cupidatat.
      </ItemPageText>
      <SubHeader text="Ingredients" />
      <View style={{ flexDirection: "row", marginHorizontal: 20 }}>
        <IngredientCard />
        <IngredientCard />
        <IngredientCard />
        <IngredientCard />
      </View>

    </Container>
  );
};

export default ItemScreen;

const styles = StyleSheet.create({});
