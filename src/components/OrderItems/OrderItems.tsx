import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Container } from "./OrderItems.styled";
import { useQuery, useSubscription, gql } from "@apollo/client";
import OrderItem from "../OrderItem/OrderItem";
import { useSelector } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";

const GET_USER_ORDERS = gql`
  query GetUserOrders($user: String!) {
    getUserOrders(user: $user) {
      id
      orderBy {
        userName
      }
      orderItems {
        item {
          name
          image
        }
        quantity
      }
      total
      orderStatus
    }
  }
`;
const ORDER_PLACED = gql`
  subscription orderPlaced($orderBy: ID!) {
    orderPlaced(orderBy: $orderBy) {
      id
      orderBy {
        userName
      }
      orderItems {
        item {
          name
          image
        }
        quantity
      }
      total
      orderStatus
    }
  }
`;

const DisplayOrderItems = ({ orderBy }) => {
  const { loading, error, data } = useQuery(GET_USER_ORDERS, {
    variables: { user: orderBy },
    pollInterval: 500,
  });
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error : {error.message}</Text>;
  return data.getUserOrders.map((userOrder, i) => {
    return (
      <OrderItem
        key={userOrder.id}
        orderName={
          userOrder.orderItems.length === 2
            ? `${userOrder.orderItems[0].item.name} and 1 other`
            : userOrder.orderItems.length > 2
            ? `${userOrder.orderItems[0].item.name} and ${userOrder.orderItems.length} others`
            : userOrder.orderItems[0].item.name
        }
        orderStatus={userOrder.orderStatus}
        img={userOrder.orderItems[0].item.image}
      />
    );
  });
};

const OrderItems = () => {
  const orderBy = useSelector((state) => state.auth.user.id);
  return (
    <Container>
      <DisplayOrderItems orderBy={orderBy} />
    </Container>
  );
};

const styles = StyleSheet.create({});
export default OrderItems;
