import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const useCreateUser = () => {
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [modalLogin, setModalLogin] = useState(false);

  const createUser = (email: string, password: string, e: React.FormEvent) => {
    setIsLoading(true);

    e.preventDefault();
    const auth = getAuth();

    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;

          setIsLoading(false);
          if (user) {
            setModalLogin(true);
            setConfirmPassword("");
          }
        })
        .catch((error) => {
          if (error) {
            setIsLoading(false);
            setEmail(" ");
            setPassword(" ");
            setConfirmPassword(" ");
            const errorMessage = error.message;
            alert(errorMessage);
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return {
    password,
    setPassword,
    email,
    setEmail,
    confirmPassword,
    setConfirmPassword,
    createUser,
    isLoading,
    modalLogin,
    setModalLogin,
  };
};
