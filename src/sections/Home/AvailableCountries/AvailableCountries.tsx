import styles from "./index.module.scss";
import Title from "../../../components/Title";
import { availableCountries } from "../../../constants/constants";
import { useWidth } from "../../../hooks/useWidth";
import CountriesSlider from "../../../components/CountriesSlider";

const AvailableCountries = () => {
  const { width } = useWidth();

  return (
    <section className={styles.availableC}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          paddingLeft:15,
          paddingRight:15,
        }}
      >
        <Title
          text="We are available in many well-known countries"
          fontSize={38}
          color="inherit"
        />
      </div>
      <div className={styles.availableContainer}>
        {width > 630 ? (
          <div className={ styles.availableItems}>
            {availableCountries.map((item, index) => (
              <div key={index}  className={styles.imageWrapper}>
                <img src={item.country} alt="countries" />
              </div>
            ))}
          </div>
        ) : <CountriesSlider/>}
      </div>
    </section>
  );
};

export default AvailableCountries;
