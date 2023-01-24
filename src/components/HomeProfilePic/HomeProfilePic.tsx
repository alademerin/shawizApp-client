import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { UserImage } from "./HomeProfilePic.styled";

export default function HomeProfilePic() {
  return (
    <View>
      <UserImage
        style={styles.logo}
        source={{
          uri: "https://images.unsplash.com/photo-1530785602389-07594beb8b73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fE5pZ2VyaWFuJTIwaGVhZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
});
