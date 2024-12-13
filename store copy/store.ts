import { createStore } from "redux";
import movieReducer from "./reducers/movie-reducer";

const store = createStore(movieReducer);

export default store;

export type State = ReturnType<typeof store.getState>;
