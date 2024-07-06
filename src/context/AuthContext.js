import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
user: localStorage.getItem("user") !== undefined ? JSON.parse(localStorage.getItem("user")) : null,
professional: localStorage.getItem("professional") !== undefined ? JSON.parse(localStorage.getItem("professional")) : null,
  loading: false,
  error: null,

};

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        professional: null,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        professional: null,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        professional: null,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
        professional: null,
        loading: false,
        error: null,
      };
    case "LOGIN_PROFESSIONAL_START":
      return {
        user: null,
        professional: null,
        loading: true,
        error: null,
      };
    case "LOGIN_PROFESSIONAL_SUCCESS":
      return {
        user: null,
        professional: action.payload,
        loading: false,
        error: null,
      };
    case "LOGIN_PROFESSIONAL_FAILURE":
      return {
        user: null,
        professional: null,
        loading: false,
        error: action.payload,
      };
    case "PROFESSIONAL_LOGOUT":
      return {
        user: null,
        professional: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
    localStorage.setItem("professional", JSON.stringify(state.professional));
  }, [state.user, state.professional]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        professional: state.professional,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};