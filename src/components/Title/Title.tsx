import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Container, PageTitle, Underline } from "./Title.styled";

interface Props {
  title: string;
  underline: string;
}

const Title = ({ title, underline }: Props) => {
  return (
    <Container>
      <PageTitle>{title}</PageTitle>
      <Underline underline={underline} />
    </Container>
  );
};

const styles = StyleSheet.create({});

export default Title;
