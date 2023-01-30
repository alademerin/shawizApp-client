import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Blur,
  Container,
  Gradient,
  ImageContainer,
  ItemImage,
  ItemName,
  ItemNameContainer,
  ItemPageText,
} from "./ItemScreen.styled";
import Title from "../../components/Title/Title";
import SubHeader from "../../components/SubHeader/SubHeader";
import IngredientCard from "../../components/IngredientCard/IngredientCard";
import CommentCard from "../../components/CommentCard/CommentCard";
import { ScrollView } from "react-native-gesture-handler";
import { FavouriteButton } from "../../components/Buttons/Buttons";

const ItemScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container>
        <ImageContainer>
          <ItemImage
            source={{
              uri: "https://media.istockphoto.com/id/1286288597/photo/gyros-grilled-meat-slices-in-a-pita-bread-closeup-view.jpg?s=612x612&w=0&k=20&c=60mXtLpGp1rX2b_49oGlJ1v1UaLtS1PQTBnqD6iBc1M=",
            }}
          />

          <Blur intensity={20} tint="dark" />
          <Gradient colors={["transparent", "rgba(0, 0, 0, 1)"]} />
          <ItemNameContainer>
            <ItemName>Single Sausages Extra Stuffed With Cheese</ItemName>
          </ItemNameContainer>
          <FavouriteButton />
        </ImageContainer>
        <SubHeader text="About" />
        <ItemPageText>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint
          consectetur cupidatat.
        </ItemPageText>
        <SubHeader text="Ingredients" />
        <View style={{ flexDirection: "row", marginHorizontal: 20 }}>
          <IngredientCard />
          <IngredientCard />
          <IngredientCard />
          <IngredientCard />
        </View>

        <SubHeader text="Comments" />
        <CommentCard />
        <CommentCard />
        <CommentCard />
      </Container>
    </ScrollView>
  );
};

export default ItemScreen;

const styles = StyleSheet.create({});
