import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./slices/movie-reducer";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
});

export default store;

export type State = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
