import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setAuth } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { HOME } from "../constants/routes";

export const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isLoading,setIsLoading]=useState<boolean>(false)

  const Login = (email: string, password: string, e: React.FormEvent) => {
    setIsLoading(true)
    e.preventDefault();
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        if (user) {
          const userJson = JSON.stringify(user);
          localStorage.setItem("user", userJson);
          localStorage.setItem("theme", "light");
          dispatch(setAuth(true));
          setIsLoading(false)
          navigate(HOME);

        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      }).finally(()=>{
        setIsLoading(false)

      })
  };

  return {
    password,
    setPassword,
    email,
    setEmail,
    Login,
    isLoading
  };
};
