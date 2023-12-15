import { useDispatch } from "react-redux";
import { setAuth } from "../redux/slices/authSlice";
import { SIGN_UP } from "../constants/routes";
import { useNavigate } from "react-router-dom";

export const useLogOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const LogOut = () => {
    dispatch(setAuth(false));
    localStorage.removeItem("user");
    localStorage.removeItem("theme");
    navigate(SIGN_UP);
  };

  return { LogOut };
};
