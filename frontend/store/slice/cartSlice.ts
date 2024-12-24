import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the structure of a cart item
interface CartItem {
  id: number;
  name: string;
  price: number;
  thumbnail: string;
  quantity: number;
}

// Define the initial state type
interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex > -1) {
        state.items[itemIndex].quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
