import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GreetingContainer, GreetingText, HeaderContainer, HeaderText } from "./Header.styled";
import { Container } from "../../screens/HomeScreen/HomePage.styled";
import HomeProfilePic from "../HomeProfilePic/HomeProfilePic";

const Header = () => {
  return (
    <Container>
      <HeaderContainer>
        <GreetingContainer>
          <GreetingText>Hello, </GreetingText>
          <HeaderText>David</HeaderText>
        </GreetingContainer>
        <HomeProfilePic />
      </HeaderContainer>
    </Container>
  );
};

export default Header;

const styles = StyleSheet.create({});
