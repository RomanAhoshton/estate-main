import { ReactNode } from "react";
import style from "./index.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useTheme } from "../hooks/useTheme";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {

  const { isDarkTheme} = useTheme();


  return (
    <div className={style.layout} style={{backgroundColor:isDarkTheme==='dark'?"#0E1012":"white",color:isDarkTheme==='dark'?"white":"#0E1012"}}>
      <Header />
      <main style={{flex:1}}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
