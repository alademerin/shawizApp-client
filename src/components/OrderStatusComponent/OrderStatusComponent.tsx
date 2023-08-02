import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Circle,
  CircleBorder,
  Container,
  Line,
  MainContainer,
  StatusContainer,
  StatusTextView,
} from "./OrderStatus.styled";

const OrderStatusComponent = ({ orderStatus }) => {
  return (
    <MainContainer>
      <StatusTextView>
        <Text>Pending</Text>
        <Text>Received</Text>
        <Text>Ready</Text>
        <Text>Completed</Text>
      </StatusTextView>
      <Container>
        <StatusContainer>
          <CircleBorder
            checked={
              orderStatus === "PENDING" ||
              orderStatus === "RECEIVED" ||
              orderStatus === "READY" ||
              orderStatus === "COMPLETED"
            }
          >
            <Circle
              checked={
                orderStatus === "PENDING" ||
                orderStatus === "RECEIVED" ||
                orderStatus === "READY" ||
                orderStatus === "COMPLETED"
              }
            />
          </CircleBorder>
        </StatusContainer>
        <Line
          checked={
            orderStatus === "RECEIVED" || orderStatus === "READY" || orderStatus === "COMPLETED"
          }
        />
        <StatusContainer>
          <CircleBorder
            checked={
              orderStatus === "RECEIVED" || orderStatus === "READY" || orderStatus === "COMPLETED"
            }
          >
            <Circle
              checked={
                orderStatus === "RECEIVED" || orderStatus === "READY" || orderStatus === "COMPLETED"
              }
            />
          </CircleBorder>
        </StatusContainer>
        <Line checked={orderStatus === "READY" || orderStatus === "COMPLETED"} />
        <StatusContainer>
          <CircleBorder checked={orderStatus === "READY" || orderStatus === "COMPLETED"}>
            <Circle checked={orderStatus === "READY" || orderStatus === "COMPLETED"} />
          </CircleBorder>
        </StatusContainer>
        <Line checked={orderStatus === "COMPLETED"} />
        <StatusContainer>
          <CircleBorder checked={orderStatus === "COMPLETED"}>
            <Circle checked={orderStatus === "COMPLETED"} />
          </CircleBorder>
        </StatusContainer>
      </Container>
    </MainContainer>
  );
};

export default OrderStatusComponent;
