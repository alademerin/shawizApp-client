import { useState } from "react";
import { StyleSheet, Text, View, Modal } from "react-native";
import React, { useEffect } from "react";
import { Container, ModalHeader, ModalTitle } from "./OrderItems.styled";
import { useQuery, useSubscription, gql, useApolloClient } from "@apollo/client";
import OrderItem from "../OrderItem/OrderItem";
import { useSelector } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";
import TouchableScale from "react-native-touchable-scale";
import { Ionicons } from "@expo/vector-icons";
// import Modal from "../Modal/Modal";
import ModalItem from "../ModalItem/ModalItem";
import { BtnText, ExitButton, ExitContainer } from "../ModalItem/ModalItem.styled";

export const GET_USER_ORDERS = gql`
  query GetUserOrders($user: String!) {
    getUserOrders(user: $user) {
      id
      orderId
      orderBy {
        userName
      }
      orderItems {
        item {
          name
          image
          price
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
      orderId
      orderBy {
        userName
      }
      orderItems {
        item {
          name
          image
          price
        }
        quantity
      }
      total
      orderStatus
    }
  }
`;

const DisplayOrderItems = ({ orderBy }) => {

  const client = useApolloClient();
  const { subscribeToMore, ...result } = useQuery(GET_USER_ORDERS, {
    variables: { user: orderBy },
  });

  const handleSubscription = () => {
    subscribeToMore({
      document: ORDER_PLACED,
      variables: { orderBy },
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;

        const newOrder = subscriptionData.data.orderPlaced;

        // Check if the new order already exists in the cache
        const existingOrders = prev?.getUserOrders || [];
        const isOrderExisting = existingOrders.some((order) => order.id === newOrder.id);

        // If the new order doesn't exist, add it to the cache
        if (!isOrderExisting) {
          return {
            ...prev,
            getUserOrders: [newOrder, ...existingOrders],
          };
        }

        return prev; // If the order already exists, return the previous cache
      },
    });
  };

  useEffect(() => {
    handleSubscription();
    return () => {
      client.cache.evict({ fieldName: "getUserOrders" });
    };
  });

  if (result.loading) return <Text>Loading...</Text>;
  if (result.error) return <Text>Error : {result.error.message}</Text>;
  return result.data.getUserOrders.map((userOrder, i) => {
    return (
      <OrderItem
        key={userOrder.orderId}
        orderNumber={userOrder.orderId}
        orderName={
          userOrder.orderItems.length === 2
            ? `${userOrder.orderItems[0].item.name} and 1 other`
            : userOrder.orderItems.length > 2
            ? `${userOrder.orderItems[0].item.name} and ${userOrder.orderItems.length - 1} others`
            : userOrder.orderItems[0].item.name
        }
        orderStatus={userOrder.orderStatus}
        img={userOrder.orderItems[0].item.image}
        orderItems={userOrder.orderItems}
        // modalVisible={modalVisible}
        // closeModal={() => setModalVisible(false)}
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

export default OrderItems;
