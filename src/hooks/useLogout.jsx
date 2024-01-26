// React
import { useState } from "react";

// Firebase
import { projectAuthentication } from "../firebase/config";

// Hooks
import { useAuthenticationContext } from "../hooks/useAuthenticationContext";

const useLogout = () => {
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthenticationContext();

  const logoutUser = async () => {
    try {
      setIsPending(true);

      // Logout the user
      await projectAuthentication.signOut();
      dispatch({ type: "LOGOUT_USER" });
      setIsPending(false);
    } catch (error) {
      console.log("Logout hook: Error is -->", error.message);
      setIsPending(false);
    }
  };

  return { logoutUser, isPending };
};

export { useLogout };
