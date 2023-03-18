import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";

// Define a type for the slice state
interface CartState {
  items: Product[];
}

// Define the initial state using that type
const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart: (state: CartState, action: PayloadAction<Product>) => {
      state.items = [...state.items, action.payload].sort((a, b) => a._id.localeCompare(b._id));
    },
    removeFromCart: (
      state: CartState,
      action: PayloadAction<{ id: String }>
    ) => {
      const index = state.items.findIndex(
        (item: Product) => item._id == action.payload.id
      );
      let newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.log(
          `Cant remove Product ${action.payload.id} as it is not in basket`
        );
      }

      state.items = newBasket;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
//This is a function that will help you select items from the basket slice directly when you use this function. THE STATE HERE IS THE OVERALL STATE OF APPLICATION,CART IS THE SLICE REDUCER DEFINED IN STORE IMPORTED FROM THIS FILE, AND ITEMS IS THE PROPERTY OF THE SLICE WE WANT TO SELECT
export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartItemById = (state: RootState, id: String) => state.cart.items.filter((item)=> {
    item._id == id
})
export const cartPriceTotal = (state:RootState) => state.cart.items.reduce((total : number, item: Product) => (total+=item.price),0)
// 0 means initial value 0
//Selects Items just like we did with useSelector Hook i.e in components we used to do const isLoggedin = useSelector(state => state.auth.isLoggedin) so now we will say useSelector(selectCartItems)
export default cartSlice.reducer;
