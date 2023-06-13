import * as SecureStore from "expo-secure-store";
export const save = async (key, value) => {
  await SecureStore.setItemAsync(key, value);
};

  export const getExistingBasketItems = async () => {
    try {
      const basketString = await SecureStore.getItemAsync("basket");
      if (basketString !== null) {
        const basket = JSON.parse(basketString);
        dispatch(basketActions.addToBasket(basket));
      }
    } catch (error) {
      console.log(`Failed to retrieve basket from SecureStore. Error: ${error}`);
    }
  };
export const getValueFor = async (key) => {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    return JSON.parse(result);
  } else {
    alert("No values stored under that key.");
  }
};
