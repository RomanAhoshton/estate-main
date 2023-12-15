import { Build } from "../../constants/constants";
import styles from "./index.module.scss";

interface Props{
    title:string;
}

const Banner = ({title}:Props) => {
  return (
    <section className={styles.banner}>
      <div className={styles.bannerContainer}>
        <div className={styles.textBlock}>
          <p className={styles.title}>{title}</p>
          <p className={styles.subtitle}> We provide a complete service for the sale, purchase or rental of real estate.</p>
        </div>

        <div className={styles.imageBlock}>
          <img src={Build} alt="Build" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
