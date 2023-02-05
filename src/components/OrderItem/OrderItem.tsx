import { View, Text } from "react-native";
import React from "react";
import {
  Container,
  Image,
  OrderDetailsContainer,
  OrderName,
  OrderNumber,
  OrderStatus,
} from "./OrderItem.styled";

const OrderItem = () => {
  return (
    <Container>
      <Image source={{ uri: "https://picsum.photos/199", width: 100, height: 100 }} />
      <OrderDetailsContainer>
        <OrderNumber>052302KT1E</OrderNumber>
        <OrderName numberOfLines={2} ellipsizeMode="center">
          Single Sausages Extra stuffed and 2 others
        </OrderName>
        <OrderStatus>PENDING</OrderStatus>
      </OrderDetailsContainer>
    </Container>
  );
};

export default OrderItem;
