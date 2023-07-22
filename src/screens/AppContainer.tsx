import React, { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack, { AuthStack } from "../components/Navigation";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../store/slices/authSclice";

export default function AppContainer() {
  const dispatch = useDispatch();
  const fetchuser = async () => {
    await dispatch(getCurrentUser());
  };

  useEffect(() => {
    fetchuser();
  }, []);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <NavigationContainer>{isLoggedIn ? <HomeStack /> : <AuthStack />}</NavigationContainer>
    </SafeAreaProvider>
  );
}
