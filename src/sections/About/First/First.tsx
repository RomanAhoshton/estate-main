import styles from "./index.module.scss";
import { landingDecor } from "../../../constants/constants";
import { AboutFirst } from "../../../constants/constants";
import TrustedAbout from "../../../components/TrustedAbout";
import SaleRent from "../../../components/SaleRent";
import Circle from "../../../icons/Circle";
import Title from "../../../components/Title";
import SubTitle from "../../../components/SubTitle";

const First = () => {
  return (
    <section className={styles.first}>
      <img src={landingDecor.right} alt="right" className={styles.right} />
      <div className={styles.firstContainer}>
        <div className={styles.firstImageBlock}>
          <div className={styles.firstImage}>
            <TrustedAbout />
            <SaleRent />
            <img src={AboutFirst} alt="first" />
          </div>
        </div>
        <div className={styles.textBlock}>
          <Circle />
          <div className={styles.title}>
            <Title
              text="Fusce placerat enim et odio molestie sagittis"
              color="inherit"

            />
          </div>
          <div className={styles.subtitle}>
            <SubTitle
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
              color="#585981DE"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default First;
