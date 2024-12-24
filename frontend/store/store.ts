import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "@/store/slice/data-slice";
import favoritesReducer from "@/store/slice/favoritesSlice";
import cartReducer from "@/store/slice/cartSlice";

export const store = configureStore({
  reducer: {
    dataReducer,
    favorites: favoritesReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
