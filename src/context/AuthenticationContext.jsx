// React
import { createContext, useReducer } from "react";

const AuthenticationContext = createContext();

const initialState = {
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return { ...state, user: action.payload };

    case "LOGOUT_USER":
      return { ...state, user: null };

    default:
      return state;
  }
};

const AuthenticationContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log("State is -->", state);

  return (
    <AuthenticationContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export { AuthenticationContextProvider };
export default AuthenticationContext;
