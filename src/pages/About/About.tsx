import styles from "./index.module.scss";
import Banner from "../../components/Banner";
import First from "../../sections/About/First";
import Results from "../../sections/About/Results";
import Members from "../../sections/About/Members";
import BestEstate from "../../components/BestEstate";

const About = () => {
  return (
    <div className={styles.about}>
      <Banner title="About us" />
      <First />
      <Results/>
      <Members/>
      <BestEstate/>
    </div>
  );
};

export default About;
