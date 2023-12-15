import styles from "./index.module.scss";

import Title from "../Title";
import SubTitle from "../SubTitle";
import BlueButton from "../BlueButton/BlueButton";
import  { landingDecor,BBimage } from "../../constants/constants";
import { useWidth } from "../../hooks/useWidth";

const BestEstate = () => {
    const {width}=useWidth()


  return (
    <section className={styles.bestEstate}>
      <img src={landingDecor.left} alt="left"  className={styles.left}/>
      <div className={styles.estateContainer}>
        <div className={styles.estateContent} >
          <div className={styles.textBlock}>
            <Title
              text="Find your bestReal Estate"
              fontSize={width>1070?54:36}
              color="#110229"
            />
            <div style={{ marginTop: 33, marginBottom: 44, maxWidth: 475 }}>
              <SubTitle
                text="We provide a complete service for the sale, purchase or rental of real estate."
                color="#585981"
              />
            </div>
            <BlueButton text="Contact Us" />
          </div>
          <div className={styles.imageBlock}>
            <img src={BBimage} alt="Building" style={{ maxHeight: 482 }} />
          </div>
        </div>
      </div>
      <img src={landingDecor.right} alt="left"  className={styles.right}/>
    </section>
  );
};

export default BestEstate;
