import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Title from "../../components/Title/Title";
import { OrderNowButton } from "../../components/Buttons/Buttons";
import { OrderButtonContainer, PriceContainer, PriceText, TotalText } from "./BasketScreen.styled";
import { ScrollView } from "react-native-gesture-handler";
import BasketItems from "../../components/BasketItems/BasketItems";
import { useSelector } from "react-redux";
import * as SecureStore from "expo-secure-store";

const BasketScreen = () => {
  const total = useSelector((state) => state.basket.total);

  const orderBtnPressed = async () => {
    await SecureStore.deleteItemAsync("basket");
  };

  return (
    <SafeAreaView>
      <View style={{ marginTop: 30 }}>
        <Title title="Basket" underline="95px" />
        <ScrollView
          style={styles.scrollview}
          contentContainerStyle={styles.scrollContentContainer}
          showsVerticalScrollIndicator={false}
        >
          <BasketItems />
        </ScrollView>
        <PriceContainer>
          <TotalText>Total:</TotalText>
          <PriceText>₦{total}</PriceText>
        </PriceContainer>
        <OrderButtonContainer>
          <OrderNowButton orderBtnPressed={orderBtnPressed} />
        </OrderButtonContainer>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollview: {
    height: "75%",
    marginBottom: 10,
  },
  scrollContentContainer: {
    paddingBottom: 25,
    // height: "92%",
  },
});

export default BasketScreen;
