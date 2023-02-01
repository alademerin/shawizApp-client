import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
const Stack = createNativeStackNavigator();
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import ItemScreen from "../screens/ItemScreen/ItemScreen";
// import OrderScreen from "../screens/OrderScreen/OrderScreen";
import BasketScreen from "../screens/BasketScreen/BasketScreen";

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={MainTabScren} />
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
          } else if (route.name === "Item") {
            iconName = "list";
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
      <Tab.Screen options={{ headerShown: false }} name="Item" component={ItemScreen} />
      <Tab.Screen options={{ headerShown: false }} name="Basket" component={BasketScreen} />
    </Tab.Navigator>
  );
};

export default HomeStack;
