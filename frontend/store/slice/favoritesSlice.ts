import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TProductsItem } from "@/types/home";

interface FavoritesState {
  items: TProductsItem[];
}

const initialState: FavoritesState = {
  items: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<TProductsItem>) => {
      const isExists = state.items.some(
        (item) => item.id === action.payload.id
      );
      if (!isExists) {
        state.items.push(action.payload);
      }
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
