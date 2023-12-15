import styles from "./index.module.scss";
import { menuLinks } from "../../constants/constants";
import { Link } from "react-router-dom";
import Logo from "../../icons/Logo";
import { useLogOut } from "../../hooks/useLogOut";
import Switcher from "../Switcher";
import { useTheme } from "../../hooks/useTheme";
import { useWidth } from "../../hooks/useWidth";
import Burger from "../Burger";
import { useState } from "react";

const Header = () => {
  const { LogOut } = useLogOut();
  const { isDarkTheme } = useTheme();
  const { width } = useWidth();
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const handleLink = () => {
    window.scrollTo(0, 0);
    setToggleMenu(!toggleMenu);
  };

  return (
    <header
      className={styles.header}
      style={{ backgroundColor: isDarkTheme === "dark" ? "#0E1012" : "white" }}
    >
      <div className={styles.headerContainer}>
        <Logo color={isDarkTheme === "light" ? "#110229" : "white"} />
        <Switcher />

        <nav
          className={`${styles.navMenu} ${
            toggleMenu ? styles.mobileActiveMenu : ""
          }`}

        >
          <ul>
            {menuLinks.map((item, index) => (
              <li key={index} onClick={handleLink}>
                <Link
                  to={item.link}
                  style={{
                    color: isDarkTheme === "light" ? "#110229" : "white",
                  }}
                >
                  {" "}
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
          <button onClick={LogOut} className={styles.buttonLogOut}>
            LOG OUT
          </button>
        </nav>

        {width < 868 ? (
          <Burger
            color={isDarkTheme === "dark" ? "white" : "black"}
            background={isDarkTheme === "light" ? "black" : "white"}
            toggleMenu={toggleMenu}
            setToggleMenu={setToggleMenu}
          />
        ) : null}
      </div>
    </header>
  );
};

export default Header;
