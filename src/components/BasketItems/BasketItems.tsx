import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BasketItem from "../BasketItem/BasketItem";
import { useSelector } from "react-redux";

const BasketItems = () => {
  const basketItems = useSelector((state) => state.basket.items);
  console.log(basketItems);
  return (
    <View>
      {basketItems.map((i, { id, image, name, price, quantity }) => (
        <BasketItem
          key={i}
          name={name}
          image={image}
          price={price * quantity}
          quantity={quantity}
        />
      ))}
    </View>
  );
};

export default BasketItems;

const styles = StyleSheet.create({});
