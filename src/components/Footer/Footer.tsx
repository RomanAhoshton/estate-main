import styles from "./index.module.scss";
import FooterSocial from "../FooterSocial";
import FooterLinks from "../FooterLinks";
import FooterSubscribe from "../FooterSubscribe";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <FooterSocial />
        <FooterLinks />
        <FooterSubscribe />
      </div>
    </footer>
  );
};

export default Footer;
