import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
const Stack = createNativeStackNavigator();
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import ItemScreen from "../screens/ItemScreen/ItemScreen";
import OrderScreen from "../screens/OrderScreen/OrderScreen";
import BasketScreen from "../screens/BasketScreen/BasketScreen";
import FavouritesScreen from "../screens/FavouritesScreen/FavouritesScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";


const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        keyboardDissmissMode: "on-drag",
      }}
    >
      <Stack.Screen name="HomeScreen" component={MainTabScren} />
      <Stack.Screen name="ItemScreen" component={ItemScreen} />
    </Stack.Navigator>
  );
};

export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        keyboardDissmissMode: "on-drag",
      }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const MainTabScren = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Basket") {
            iconName = focused ? "basket" : "basket-outline";
          } else if (route.name === "Orders") {
            iconName = "list";
          } else if (route.name === "Favourites") {
            iconName = focused ? "heart" : "heart-outline";
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={30} color={color} />;
        },
        tabBarActiveTintColor: "#421b39",
        tabBarInactiveTintColor: "#421b39",
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
      {/* <Tab.Screen options={{ headerShown: false }} name="Item" component={ItemScreen} /> */}
      <Tab.Screen options={{ headerShown: false }} name="Basket" component={BasketScreen} />
      <Tab.Screen options={{ headerShown: false }} name="Orders" component={OrderScreen} />
      <Tab.Screen options={{ headerShown: false }} name="Favourites" component={FavouritesScreen} />
      {/* <Tab.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} /> */}
    </Tab.Navigator>
  );
};

export default HomeStack;
