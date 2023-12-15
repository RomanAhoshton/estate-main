import { footerSocial as socialLinks } from "../../constants/constants";
import styles from "./index.module.scss";

const SocialLinks = () => {
  return (
    <ul className={styles.socialLinks}>
      {socialLinks.map((item, index) => (
        <li key={index}>
          <a href={item.href}>
            <img src={item.link} alt="social" />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
