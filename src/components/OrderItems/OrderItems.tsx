import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Container } from "./OrderItems.styled";
import { useQuery, gql } from "@apollo/client";
import OrderItem from "../OrderItem/OrderItem";
import { useSelector } from "react-redux";
import {ScrollView} from 'react-native-gesture-handler'

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

const DisplayOrderItems = ({ user }) => {
  const { loading, error, data } = useQuery(GET_USER_ORDERS, {
    variables: { user },
  });
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error : {error.message}</Text>;
  return data.getUserOrders.map((userOrder, i) => {
    console.log(userOrder.id);
    return (
      <OrderItem
        key={userOrder.id}
        orderName={
          userOrder.orderItems.length > 1
            ? `${userOrder.orderItems[0].item.name} and ${userOrder.orderItems.length - 1} others`
            : userOrder.orderItems[0].item.name
        }
        orderStatus={userOrder.orderStatus}
        img={userOrder.orderItems[0].item.image}
      />
    );
  });
};

const OrderItems = () => {
  const user = useSelector((state) => state.auth.user.id);
  return (
    <ScrollView>
      <Container>
        <DisplayOrderItems user={user} />
      </Container>
    </ScrollView>
  );
};

export default OrderItems;
