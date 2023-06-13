import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import BasketItem from "../BasketItem/BasketItem";
import { useDispatch, useSelector } from "react-redux";
import { getValueFor } from "../../helperMethods";
import { basketActions } from "../../store/slices/basketSlice";
import * as SecureStore from "expo-secure-store";
import { getBasketItems } from "../../store/slices/basketSlice.js";

const BasketItems = () => {
  const dispatch = useDispatch();
  const [bi, setBi] = useState([]);
  const basketItems = useSelector((state) => state.basket.items);
  const total = useSelector((state) => state.basket.total);

  const fetchData = async () => {
    return dispatch(getBasketItems());
  };

  useEffect(() => {
    alert(total);
    fetchData();
  }, []);
  return (
    <View>
      {basketItems.map(({ id, image, name, price, quantity, total }, i) => (
        <BasketItem key={i} name={name} image={image} price={total} quantity={quantity} />
      ))}
      <Text>total:{total}</Text>
    </View>
  );
};

export default BasketItems;

const styles = StyleSheet.create({});
