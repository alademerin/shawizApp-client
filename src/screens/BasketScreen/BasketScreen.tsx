import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Title from "../../components/Title/Title";
import { OrderNowButton } from "../../components/Buttons/Buttons";
import { OrderButtonContainer, PriceContainer, PriceText, TotalText } from "./BasketScreen.styled";
import { ScrollView } from "react-native-gesture-handler";
import BasketItems from "../../components/BasketItems/BasketItems";
import { useDispatch, useSelector } from "react-redux";
import * as SecureStore from "expo-secure-store";
import { authActions } from "../../store/slices/authSclice";
import { basketActions } from "../../store/slices/basketSlice";
import { gql, useMutation } from "@apollo/client";
import Toast from "react-native-toast-message";
import { GET_USER_ORDERS } from "../../components/OrderItems/OrderItems.tsx";

const BasketScreen = () => {
  const total = useSelector((state) => state.basket.total);
  const orderBy = useSelector((state) => state.auth.user.id);
  const basketItems = useSelector((state) => state.basket.items);
  const dispatch = useDispatch();
  const orderItems = basketItems?.map((basketItem) => {
    const item = basketItem.id;
    const quantity = basketItem.quantity;
    return { item, quantity };
  });

  const PLACE_ORDER_MUTATION = gql`
    mutation PlaceOrder($orderBy: ID!, $orderItems: [OrderItemInput!]!) {
      placeOrder(orderBy: $orderBy, orderItems: $orderItems) {
        id
        orderItems {
          item {
            name
            price
          }
          quantity
        }
        orderStatus
        orderBy {
          id
        }
      }
    }
  `;

  const [placeOrder] = useMutation(PLACE_ORDER_MUTATION, {
    update(cache, { data: { placeOrder } }) {
      // Fetch the current cache data for the GET_USER_ORDERS query
      const { getUserOrders } = cache.readQuery({
        query: GET_USER_ORDERS,
        variables: { user: orderBy },
      });

      //update the cache with the new OrderData

      cache.writeQuery({
        query: GET_USER_ORDERS,
        variables: { user: orderBy },
        returnPartialData: true,
        data: {
          getUserOrders: [placeOrder, ...getUserOrders],
        },
      });
    },
  });

  const orderBtnPressed = async () => {
    console.log(basketItems.length);
    if (basketItems.length > 0) {
      const response = placeOrder({ variables: { orderBy, orderItems } });
      console.log(response);
      dispatch(basketActions.clearBasket());
      Toast.show({
        type: "success",
        position: "bottom",
        text1: "Order Placed",
        text2: "payment gateway would be implemented shortly lol",
      });
    }
    // await SecureStore.deleteItemAsync("basket");
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
