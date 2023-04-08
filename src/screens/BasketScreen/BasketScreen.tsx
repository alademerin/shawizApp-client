import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Title from "../../components/Title/Title";
import { OrderNowButton } from "../../components/Buttons/Buttons";
import { OrderButtonContainer } from "./BasketScreen.styled";
import { ScrollView } from "react-native-gesture-handler";
import BasketItems from "../../components/BasketItems/BasketItems";

const BasketScreen = () => {
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
        <OrderButtonContainer>
          <OrderNowButton />
        </OrderButtonContainer>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollview: {
    height: "92%",
    // marginBottom: 10,
  },
  scrollContentContainer: {
    paddingBottom: 100,
    // height: "92%",
  },
});

export default BasketScreen;
