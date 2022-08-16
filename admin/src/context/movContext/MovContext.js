import MovReducer from "./MovReducer";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  movies: [],
  isFetching: false,
  error: false,
};

export const MovContext = createContext(INITIAL_STATE);

export const MovContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MovReducer, INITIAL_STATE);

  return (
    <MovContext.Provider
      value={{
        movies: state.movies,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </MovContext.Provider>
  );
};
