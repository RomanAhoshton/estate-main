import { FC, memo, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import {
  SIGN_UP,
  SIGN_IN,
  HOME,
  ABOUT_US,
  CONTACT_US,
  MARKETPLACE,
} from "./constants/routes";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Marketplace from "./pages/Marketplace";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { setAuth } from "./redux/slices/authSlice";


const AppRoutes: FC = () => {

  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = localStorage.getItem("user");
    if (getUser) {
      dispatch(setAuth(true));
    }
  }, [isAuthenticated]);

  if (isAuthenticated) {
    return (
      <Layout>
        <Routes>
          <Route path={HOME} element={<Home />} />
          <Route path={ABOUT_US} element={<About />} />
          <Route path={CONTACT_US} element={<Contact />} />
          <Route path={MARKETPLACE} element={<Marketplace />} />
        </Routes>
      </Layout>
    );
  }

  return (
    <Routes>
      <Route path={SIGN_UP} element={<Signup />} />
      <Route path={SIGN_IN} element={<Signin />} />
    </Routes>
  );
};

export default memo(AppRoutes);
