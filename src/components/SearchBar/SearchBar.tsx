import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { Container, SearchText, SliderContainer } from "./SearchBar.styled";

export default function SearchBar() {
  return (
    <Container>
      <SearchText>
        <Feather name="search" size={24} color="black" style={{ marginRight: 10 }} />
        <TextInput placeholder="Search"></TextInput>
      </SearchText>
      <SliderContainer>
        <FontAwesome name="sliders" size={24} color="black" />
      </SliderContainer>
    </Container>
  );
}

const styles = StyleSheet.create({});
