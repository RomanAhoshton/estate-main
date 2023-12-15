import styles from "./index.module.scss";
import First from "../../sections/Home/First";
import Chart from "../../sections/Home/Chart";
import CryptoCard from "../../sections/Home/CryptoCard";
import AvailableCountries from "../../sections/Home/AvailableCountries";
import BestEstate from "../../components/BestEstate";

const Home = () => {
  return (
    <div className={styles.home}>
      <First />
      <Chart />
      <CryptoCard />
      <AvailableCountries />
      <BestEstate/>
    </div>
  );
};

export default Home;
