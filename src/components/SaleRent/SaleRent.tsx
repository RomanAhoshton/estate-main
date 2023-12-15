import styles from "./index.module.scss";
import Sale from "../../numbers/Sale/Sale";
import Rent from "../../numbers/Rent/Rent";

const SaleRent = () => {
  return (
    <div className={styles.saleRent}>
      <div className={styles.sale}>
        <Sale />
        <span>Property Sale</span>
      </div>
      <div className={styles.rent}>
        <Rent />
        <span> Apartmen Rent</span>
      </div>
    </div>
  );
};

export default SaleRent;
