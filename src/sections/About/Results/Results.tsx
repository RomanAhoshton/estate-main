import styles from "./index.module.scss";
import Lock from "../../../icons/Lock";
import Title from "../../../components/Title";
import SubTitle from "../../../components/SubTitle";
import ResultsMain from "../../../icons/ResultsMain";
import NumberHelper from "../../../numbers/NumberHelper/NumberHelper";
import ResultTotal from "../../../components/ResultTotal";
import Coins from "../../../icons/About/Coins";
import Invested from "../../../icons/About/Invested";
import Users from "../../../icons/About/Users";
import Wallets from "../../../icons/About/Wallets";
import { landingDecor } from "../../../constants/constants";


const Results = () => {
  return (
    <section className={styles.results}>
      <img src={landingDecor.left} alt="left" className={styles.left}/>
      <div className={styles.resultContainer}>
        <div className={styles.textBlock}>
          <Lock />
          <Title text="Pellentesque ac tortor" color="inherit" />
          <SubTitle
            color="#585981DE"
            text="Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est."
          />
        </div>

        <div className={styles.ourResults}>
          <ResultsMain />

          <ResultTotal
            count={<NumberHelper steps={100} targetValue={100} quantity="" />}
            text="Supported Coins"
            children={<Coins />}
            widthB={248}
            height={218}
            top={100}
            right={500}
          />
          <ResultTotal
            count={<NumberHelper steps={20} targetValue={20} quantity="M" />}
            text="Open Wallets"
            children={<Wallets />}
            widthB={210}
            height={212}
            top={10}
            right={200}
          />
          <ResultTotal
            count={<NumberHelper steps={50} targetValue={50} quantity="M" />}
            text="USD Invested"
            children={<Invested />}
            widthB={210}
            height={212}
            top={300}
            right={200}
          />
          <ResultTotal
            count={<NumberHelper steps={60} targetValue={200} quantity="K" />}
            text="Registered Users"
            children={<Users />}
            widthB={248}
            height={218}
            top={400}
            right={500}
          />
        </div>
      </div>
    </section>
  );
};

export default Results;
