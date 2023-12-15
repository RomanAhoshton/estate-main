import styles from "./index.module.scss";
import Trusted from "../../numbers/Trusted/Trusted";
import { Stars } from "../../constants/constants";

const TrustedAbout = () => {
  return (
    <div className={styles.trusted}>
      <Trusted />
      <img src={Stars} alt="stars" />

      <div className={styles.text}>
        <span>Trusted on</span>
        <span> 500+ Reviews</span>
      </div>
    </div>
  );
};

export default TrustedAbout;
