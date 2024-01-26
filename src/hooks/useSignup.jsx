// React
import { useState } from "react";

// Firebase
import { projectAuthentication } from "../firebase/config";

const useSignup = () => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const signupUser = async (email, password, displayName) => {
    try {
      setError(null);
      setIsPending(true);
      // Create user
      const response =
        await projectAuthentication.createUserWithEmailAndPassword(
          email,
          password
        );
      console.log("Signup hook: User is -->", response);

      // Update profile with the display name
      await response.user.updateProfile({ displayName });
      setIsPending(false);
    } catch (error) {
      console.log("Signup hook: Error is -->", error);
      setError(error.message);
      setIsPending(false);
    }
  };

  return { signupUser, isPending, error };
};

export { useSignup };
