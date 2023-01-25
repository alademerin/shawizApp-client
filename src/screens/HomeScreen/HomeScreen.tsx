import { View, Text } from "react-native";
import React from "react";
import Header from "../../components/Header/Header";
import { HeaderContainer } from "./HomePage.styled";
import SearchBar from "../../components/SearchBar/SearchBar";
import Title from "../../components/Title/Title";
import ItemCard from "../../components/ItemCard/ItemCard";
import ItemCards from "../../components/ItemCards/ItemCards";
import DetailedItemCard from "../../components/DetailedItemCard/DetailedItemCard";
import { SafeAreaView } from "react-native-safe-area-context";


const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Header />
      <SearchBar />
      <Title title="Recommended" underline="210px" />
      <ItemCards />
      <Title title="Other Foods" underline="175px" />
      <DetailedItemCard />
    </SafeAreaView>
  );
};

export default HomeScreen;
