import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Blur,
  Container,
  Gradient,
  ImageContainer,
  ItemImage,
  ItemName,
  ItemNameContainer,
  ItemOrderButtonContainer,
  ItemPageText,
} from "./ItemScreen.styled";
import Title from "../../components/Title/Title";
import SubHeader from "../../components/SubHeader/SubHeader";
import IngredientCard from "../../components/IngredientCard/IngredientCard";
import CommentCard from "../../components/CommentCard/CommentCard";
import { ScrollView } from "react-native-gesture-handler";
import { AddToBasketButton, FavouriteButton, OrderButton } from "../../components/Buttons/Buttons";
import { useDispatch, useSelector } from "react-redux";
import Toast from "react-native-toast-message";
import { addToBasketItems } from "../../store/slices/basketSlice";
import { nanoid } from "nanoid/non-secure";

const ItemScreen = ({ route }) => {
  const userId = useSelector((state) => state.auth.user.id);
  const basketIdx =  Date.now()

  const dispatch = useDispatch();
  const { id, image, description, name, price } = route.params;

  const addToBasket = async () => {
    dispatch(
      addToBasketItems({ basketIdx, id, image, name, price, total: price * quantity, quantity })
    );
    Toast.show({
      type: "success",
      text1: "Item Successfully added to basket",
      text2: "Please proceed to the basket page to place your order",
      position: "bottom",
    });
  };

  const [quantity, setQuantity] = useState(1);
  const [itemPrice, setItemPrice] = useState(price);

  const incrementCount = () => {
    setQuantity((prevQuantity) => {
      setItemPrice(price * (prevQuantity + 1));
      return prevQuantity + 1;
    });
  };

  const decrementCount = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => {
        setItemPrice(price * (prevQuantity - 1));
        return prevQuantity - 1;
      });
    }
  };

  return (
    <View style={{ position: "relative", flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Container>
          <ImageContainer>
            <ItemImage
              source={{
                uri: image,
              }}
            />

            <Blur intensity={20} tint="dark" />
            <Gradient colors={["transparent", "rgba(0, 0, 0, 1)"]} />
            <ItemNameContainer>
              <ItemName>{name}</ItemName>
            </ItemNameContainer>
            <FavouriteButton />
          </ImageContainer>
          <SubHeader text="About" />
          <ItemPageText>{description}</ItemPageText>
          <SubHeader text="Ingredients" />
          <View style={{ flexDirection: "row", marginHorizontal: 20 }}>
            <IngredientCard />
            <IngredientCard />
            <IngredientCard />
            <IngredientCard />
          </View>

          <SubHeader text="Comments" />
          <CommentCard stars={3} />
          <CommentCard stars={5} />
          <CommentCard stars={2} />
        </Container>
      </ScrollView>
      {/* <AddtoBasketButtonContainer> */}
      <AddToBasketButton
        price={itemPrice}
        quantity={quantity}
        addToBasketPressed={addToBasket}
        plusPressed={incrementCount}
        minusPressed={decrementCount}
      />
      {/* </AddtoBasketButtonContainer> */}
    </View>
  );
};

export default ItemScreen;

const styles = StyleSheet.create({});
