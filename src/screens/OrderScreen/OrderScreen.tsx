import { StyleSheet, View, Text } from "react-native";
import React from "react";
import Title from "../../components/Title/Title";
import { SafeAreaView } from "react-native-safe-area-context";
import OrderItems from "../../components/OrderItems/OrderItems";
import OrderItem from "../../components/OrderItem/OrderItem";
import { ScrollView } from "react-native-gesture-handler";

const OrderScreen = () => {
  return (
    <SafeAreaView>
      <View style={{ marginTop: 30 }}>
        <Title title="Orders" underline="100px" />
        <ScrollView style={styles.scrollview}>
          <OrderItems />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollview: {
    height: "93%",
    marginBottom: 10,
  },
  scrollContentContainer: {
    paddingBottom: 25,
    // height: "92%",
  },
});

export default OrderScreen;
