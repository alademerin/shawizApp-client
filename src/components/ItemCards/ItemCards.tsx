import { StyleSheet } from "react-native";
import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import { Container } from "./ItemCards.styled";
import { ScrollView } from "react-native-gesture-handler";

const ItemCards = () => {
  return (
    <Container>
      <ScrollView
        contentContainerStyle={styles.recommendedScrollView}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </ScrollView>
    </Container>
  );
};

export default ItemCards;

const styles = StyleSheet.create({
  recommendedScrollView: {
    paddingHorizontal: 20,
  },
});
