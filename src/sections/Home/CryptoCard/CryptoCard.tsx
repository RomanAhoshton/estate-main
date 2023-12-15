import styles from "./index.module.scss";
import Lock from "../../../icons/Lock";
import Title from "../../../components/Title";
import SubTitle from "../../../components/SubTitle";
import { Crypto } from "../../../constants/constants";
import { landingDecor } from "../../../constants/constants";

const CryptoCard = () => {
  return (
    <section className={styles.crypto}>
      <img src={landingDecor.left} alt="left"  className={styles.left}/>
      <div className={styles.cryptoContainer}>
        <div className={styles.cryptoText}>
          <div style={{ position: "absolute", top: -100 }}>
            <Lock />
          </div>
          <Title text="Pellentesque ac tortor" color="inherit" fontSize={36} />
          <div style={{ maxWidth: 556 }}>
            <SubTitle
              text="Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est."
              color="rgb(88, 89, 129)"
              fontSize={22}
            />
          </div>
        </div>

        <div className={styles.cryptoImage}>
          <img src={Crypto} alt="Crypto" />
        </div>
      </div>
    </section>
  );
};

export default CryptoCard;
