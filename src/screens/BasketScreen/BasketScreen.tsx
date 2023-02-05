import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Title from "../../components/Title/Title";
import BasketItem from "../../components/BasketItem/BasketItem";
import { OrderNowButton } from "../../components/Buttons/Buttons";

const BasketScreen = () => {
  return (
    <SafeAreaView>
      <View style={{ marginTop: 30 }}>
        <Title title="Basket" underline="95px" />
        <BasketItem />
        <BasketItem />
        <BasketItem />
        <OrderNowButton/>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
