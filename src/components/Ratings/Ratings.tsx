import React from "react";
import { View, Text } from "react-native";

interface StarProps {
  selected: boolean;
}

const Star = ({ selected }: StarProps) => (
  <Text style={[styles.star, selected ? styles.selected : null]}>&#9733;</Text>
);

interface StarRatingProps {
  stars: number;
}

const StarRating = ({ stars }: StarRatingProps) => {
  const starElements = [];
  for (let i = 0; i < 5; i++) {
    starElements.push(<Star key={i} selected={i < stars} />);
  }

  return <View style={styles.starRatingContainer}>{starElements}</View>;
};

const styles = {
  star: {
    fontSize: 15,
    color: "#ccc",
  },
  selected: {
    color: "#ffd700",
  },
  starRatingContainer: {
    flexDirection: "row",
  },
};

export default StarRating;
