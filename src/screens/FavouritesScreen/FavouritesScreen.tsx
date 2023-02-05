import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Title from "../../components/Title/Title";
import FavouriteItem from "../../components/FavouriteItem/FavouriteItem";

const FavouritesScreen = () => {
  return (
    <SafeAreaView>
      <View style={{ marginTop: 30 }}>
        <Title title="Favourites" underline="145px" />
        <FavouriteItem/>
      </View>
    </SafeAreaView>
  );
};

export default FavouritesScreen;
