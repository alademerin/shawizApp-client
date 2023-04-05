import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import DetailedItemCard from "../DetailedItemCard/DetailedItemCard";
import { useQuery, gql } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";

const GET_ITEMS = gql`
  query GetOtherItems {
    getOtherItems {
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

const DisplayOtherItems = () => {
  const navigation = useNavigation();
  const { loading, error, data } = useQuery(GET_ITEMS);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error : {error.message}</Text>;
  return data.getOtherItems.map(({ id, name, image, description, price }) => (
    <DetailedItemCard
      key={id}
      itemName={name}
      image={image}
      price={price}
      pressed={() => navigation.navigate("ItemScreen", { id, name, image, description, price })}
    />
  ));
};

const DetailedItemCards = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <DisplayOtherItems onPress={() => alert("hi")} />
    </ScrollView>
  );
};

export default DetailedItemCards;

const styles = StyleSheet.create({
  scrollview: {
    background: "red",
    paddingBottom: 30,
  },
});
