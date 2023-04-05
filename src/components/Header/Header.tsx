import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GreetingContainer, GreetingText, HeaderContainer, HeaderText } from "./Header.styled";
import { Container } from "../../screens/HomeScreen/HomePage.styled";
import HomeProfilePic from "../HomeProfilePic/HomeProfilePic";
import { useSelector } from "react-redux";

const Header = () => {
  const name = useSelector((state) => state.auth.user.firstName);
  return (
    <Container>
      <HeaderContainer>
        <GreetingContainer>
          <GreetingText>Hello, </GreetingText>
          <HeaderText>{name}</HeaderText>
        </GreetingContainer>
        <HomeProfilePic />
      </HeaderContainer>
    </Container>
  );
};

export default Header;

const styles = StyleSheet.create({});
