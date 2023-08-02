import { StyleSheet, View, Text, Modal } from "react-native";
import { useState } from "react";
import {
  Container,
  Image,
  OrderDetailsContainer,
  OrderName,
  OrderNumber,
  OrderStatus,
} from "./OrderItem.styled";
import TouchableScale from "react-native-touchable-scale";
import CustomModal from "../Modal/Modal";
import { ModalHeader, ModalTitle } from "../OrderItems/OrderItems.styled";
import { Ionicons } from "@expo/vector-icons";
import { BtnText, ExitButton, ExitContainer } from "../ModalItem/ModalItem.styled";
import ModalItem from "../ModalItem/ModalItem";
import { ScrollView } from "react-native-gesture-handler";
import OrderStatusComponent from "../OrderStatusComponent/OrderStatusComponent";

interface OrderItemProps {
  orderName: String;
  orderStatus: String;
  img: String;
}

const OrderItem = ({ orderName, orderStatus, img, orderNumber, orderItems }: OrderItemProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <TouchableScale activeScale={0.95} onPress={() => setIsVisible(true)}>
      <Container>
        <Image source={{ uri: img, width: 100, height: 100 }} />
        <OrderDetailsContainer>
          <OrderNumber>{orderNumber}</OrderNumber>
          <OrderName numberOfLines={2} ellipsizeMode="center">
            {orderName}
          </OrderName>
          <OrderStatus>{orderStatus}</OrderStatus>
          {/* <OrderStatusComponent /> */}
        </OrderDetailsContainer>
      </Container>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => {
          alert("Modal has been closed.");
          setModalVisible(!isVisible);
        }}
      >
        <View style={{ ...styles.centeredView, backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
          <View style={styles.modalView}>
            <View>
              <ModalHeader>
                <Ionicons name="ios-list" size={24} color="black" />
                <ModalTitle>Order no: {orderNumber}</ModalTitle>
              </ModalHeader>
              <ScrollView contentContainerStyle={styles.scrollContainer} style={styles.scrollView}>
                {orderItems.map((oi, i) => (
                  <ModalItem
                    key={i}
                    itemName={oi.item.name}
                    image={oi.item.image}
                    quantity={oi.quantity}
                    total={oi.item.price}
                  />
                ))}
              </ScrollView>
            </View>
            <View>
              {/* <Text>Order status:</Text> */}
              <OrderStatusComponent orderStatus={orderStatus} />
            </View>
            <TouchableScale
              activeScale={0.95}
              onPress={() => {
                setIsVisible(false);
              }}
            >
              <ExitContainer>
                <ExitButton>
                  <BtnText>Close</BtnText>
                </ExitButton>
              </ExitContainer>
            </TouchableScale>
          </View>
        </View>
      </Modal>
    </TouchableScale>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    paddingTop: 100,
  },
  modalView: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 5,
    paddingVertical: 25,
    paddingHorizontal: 15,
    width: 320,
    height: 500,
    justifyContent: "space-between",
    // alignItems: "left",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  scrollView: {
    // backgroundColor: "pink",
    height: 250,
  },
  scrollContainer: {
    // backgroundColor: "red",
    // height: 400,
  },
});
export default OrderItem;
