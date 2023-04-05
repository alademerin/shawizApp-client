import { StyleSheet, Text } from "react-native";
import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import { Container } from "./ItemCards.styled";
import { ScrollView } from "react-native-gesture-handler";
import { useQuery, gql } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";

const GET_RECOMMENDED_ITEMS = gql`
  query GetItems {
    getRecommendedItems {
      id
      name
      description
      image
      dateCreated
      price
      recommended
    }
  }
`;

const DisplayRecommendedItems = () => {
  const navigation = useNavigation();

  const { loading, error, data } = useQuery(GET_RECOMMENDED_ITEMS);
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error : {error.message}</Text>;
  return data.getRecommendedItems.map(({ id, name, image, description, price }) => (
    <ItemCard
      key={id}
      name={name}
      image={image}
      itemCardPressed={() =>
        navigation.navigate("ItemScreen", { id, name, image, description, price })
      }
    />
  ));
};

const ItemCards = () => {
  return (
    <Container>
      <ScrollView
        contentContainerStyle={styles.recommendedScrollView}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <DisplayRecommendedItems />
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
