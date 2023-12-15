import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setTheme } from "../redux/slices/themeSlice";
import { useLayoutEffect, useState } from "react";

export const useTheme = () => {
  const isDarkTheme = useSelector((state: RootState) => state.theme.isDark);
  const dispatch = useDispatch();
  const [switchMode, setSwitchMode] = useState<boolean>(false);

  const changeTheme = () => {
    if (isDarkTheme !== "dark") {
      localStorage.setItem("theme", "dark");
      dispatch(setTheme("dark"));
    } else {
      localStorage.setItem("theme", "light");
    
      dispatch(setTheme("light"));
    }
  };

  useLayoutEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      dispatch(setTheme(localTheme));
      if (localTheme === "light") {
        setSwitchMode(false);
      } else {
        setSwitchMode(true);
      }
    }
  }, [dispatch,isDarkTheme,switchMode]);

  return { changeTheme, isDarkTheme, switchMode };
};
