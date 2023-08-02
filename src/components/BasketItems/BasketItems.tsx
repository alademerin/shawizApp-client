import { StyleSheet, Text, View, Alert } from "react-native";
import React, { useEffect, useState } from "react";
// import BasketItem from "../BasketItem/BasketItem";
import { useDispatch, useSelector } from "react-redux";
import { basketActions } from "../../store/slices/basketSlice";
import { getBasketItems } from "../../store/slices/basketSlice.js";

const BasketItems = () => {
  const dispatch = useDispatch();
  const [bi, setBi] = useState([]);
  const basketItems = useSelector((state) => state.basket.items);
  const total = useSelector((state) => state.basket.total);

  const fetchData = async () => {
    try {
      return await dispatch(getBasketItems());
    } catch (e) {
      alert(e);
    }
  };

  const incrementQty = (id) => {
    dispatch(basketActions.incrementQuantity(id));
  };
  const decrementQty = (id) => {
    dispatch(basketActions.decrementQuantity(id));
  };
  const removeItem = (id) => {
    Alert.alert("Remove from basket?", "This cannot be undone", [
      {
        text: "Cancel",
        style: "cancel",
      },
      { text: "OK", style: "destructive", onPress: () => dispatch(basketActions.deleteItem(id)) },
    ]);
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (e) {
      alert("basket is empty");
    }
  }, []);
  return (
    <View>
      {basketItems.length ? (
        basketItems.map(({ basketIdx, id, image, name, price, quantity, total }, i) => (
          <BasketItem
            key={i}
            name={name}
            image={image}
            price={total}
            quantity={quantity}
            incrementQty={() => incrementQty(basketIdx)}
            decrementQty={() => (quantity > 1 ? decrementQty(basketIdx) : removeItem(basketIdx))}
            decrementIcon={quantity > 1 ? "minus" : "delete"}
            decrementBg={quantity > 1 ? "#421b39" : "red"}
          />
        ))
      ) : (
        <Text style={{marginHorizontal:20}}>Basket Empty</Text>
      )}
      {/* <Text>total:{total}</Text> */}
    </View>
  );
};

export default BasketItems;

const styles = StyleSheet.create({});
const BasketItem = React.lazy(() => import("../BasketItem/BasketItem"));
