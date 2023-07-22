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

interface OrderItemProps {
  orderName: String;
  orderStatus: String;
  img: String;
}

const OrderItem = ({ orderName, orderStatus, img }: OrderItemProps) => {
  return (
    <Container>
      <Image source={{ uri:  img , width: 100, height: 100 }} />
      <OrderDetailsContainer>
        <OrderNumber>052302KT1E</OrderNumber>
        <OrderName numberOfLines={2} ellipsizeMode="center">
          {orderName}
        </OrderName>
        <OrderStatus>{orderStatus}</OrderStatus>
      </OrderDetailsContainer>
    </Container>
  );
};

export default OrderItem;
