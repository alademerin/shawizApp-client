import { View, Text } from "react-native";
import React from "react";
import { Container, SubheaderText } from "./Subheader.styled";

interface Props{
  text: string
}

const SubHeader = ({text}:Props) => {
  return (
    <Container>
      <SubheaderText>{text}</SubheaderText>
      
    </Container>
  );
};

export default SubHeader;
