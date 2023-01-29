import { View, Text } from "react-native";
import React from "react";
import {
  Comment,
  CommentDetails,
  Container,
  Date,
  Image,
  ImageContainer,
  Name,
  RatingsAndDateContainer,
} from "./CommentCard.styled";
import Ratings from "../Ratings/Ratings";
import StarRating from "../Ratings/Ratings";

const CommentCard = () => {
  return (
    <Container>
      <ImageContainer>
        <Image source={{ uri: "https://picsum.photos/200", width: 200, height: 200 }} />
      </ImageContainer>

      <CommentDetails>
        <Name>Ricardo</Name>
        <RatingsAndDateContainer>
          <StarRating stars={2} />
          <Date>Sep 28, 2019</Date>
        </RatingsAndDateContainer>
        <Comment>
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa
          sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat
        </Comment>
      </CommentDetails>
    </Container>
  );
};

export default CommentCard;
