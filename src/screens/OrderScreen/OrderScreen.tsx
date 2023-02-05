import { View, Text } from "react-native";
import React from "react";
import Title from "../../components/Title/Title";
import { SafeAreaView } from "react-native-safe-area-context";
import OrderItem from "../../components/OrderItem/OrderItem";

const OrderScreen = () => {
  return (
    <SafeAreaView>
      <View style={{ marginTop: 30 }}>
        <Title title="Orders" underline="100px" />
        <OrderItem/> 
        <OrderItem/> 
        <OrderItem/> 
      </View>
    </SafeAreaView>
  );
};

export default OrderScreen;
