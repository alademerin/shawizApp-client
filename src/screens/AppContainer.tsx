import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack, { AuthStack } from "../components/Navigation";
import { useSelector } from "react-redux";

export default function AppContainer() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <NavigationContainer>
        {isLoggedIn ? <HomeStack /> : <AuthStack />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
