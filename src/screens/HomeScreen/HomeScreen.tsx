import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import Title from "../../components/Title/Title";
import ItemCards from "../../components/ItemCards/ItemCards";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import DetailedItemCards from "../../components/DetailedItemCards/DetailedItemCards";

const HomeScreen = ({ route, navigation }) => {
  return (
    <SafeAreaView>
      <Header />
      <SearchBar />
      <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
      <Title title="Recommended" underline="210px" />
        <ItemCards />
        <Title title="Other Foods" underline="175px" />
        {/* <DetailedItemCard */}
        {/*   itemName="Double Sausages with Cheese" */}
        {/*   pressed={() => navigation.navigate("ItemScreen")} */}
        {/* /> */}
        <DetailedItemCards />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    paddingBottom: 120,
  },
});

export default HomeScreen;
