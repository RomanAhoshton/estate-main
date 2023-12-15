import React from "react";
import styles from "./index.module.scss";
import { useTheme } from "../../hooks/useTheme";

export interface ApartmentProps {
  image: string;
  street: string;
  description: string;
  posted: string;
  price: string;
}

const Apartment: React.FC<ApartmentProps> = (props) => {
  const { image, street, description, posted, price } = props;
  const { isDarkTheme } = useTheme();

  return (
    <div
      className={styles.apartment}
      style={{
        backgroundColor: isDarkTheme === "light" ? "#FFF" : "#17191C",
        border: isDarkTheme === "light" ? " 1px solid #DCDCEB" : "none",
      }}
    >
      <img src={image} alt="apartment" />
      <p className={styles.street}>{street}</p>
      <p className={styles.description}>{description}</p>
      <div className={styles.postedPrice}>
        <span>{posted}</span>
        <span>{price}</span>
      </div>
    </div>
  );
};

export default Apartment;
