import styles from "./index.module.scss";
import Banner from "../../components/Banner";
import { apartments, landingDecor } from "../../constants/constants";
import Apartment from "../../components/Apartment";

const Marketplace = () => {
  return (
    <div className={styles.marketplace}>
      <Banner title="Marketplace" />
      <div className={styles.marketPlaceContainer}>
        <img src={landingDecor.left} alt="left" className={styles.left} />
        {apartments.map((item, index) => (
          <Apartment
            image={item.image}
            street={item.street}
            description={item.description}
            posted={item.posted}
            price={item.price}
            key={index}
          />
        ))}
        <img src={landingDecor.right} alt="right" className={styles.right} />
      </div>
    </div>
  );
};

export default Marketplace;
