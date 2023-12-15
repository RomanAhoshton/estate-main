import Logo from "../../icons/Logo";
import styles from "./index.module.scss";

import { useTheme } from "../../hooks/useTheme";
import SocialLinks from "../SocialLinks";

const FooterSocial = () => {
  const { isDarkTheme } = useTheme();
  const fullYear = new Date().getFullYear();
  return (
    <div className={styles.footerSocialContent}>
      <Logo color={isDarkTheme === "light" ? "#110229" : "white"} />
      <p className={styles.socialTitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <SocialLinks />

      <p>{`©${fullYear} All rights reserved.`}</p>
    </div>
  );
};

export default FooterSocial;
