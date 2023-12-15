import styles from "./index.module.scss";
import Rechart from "../../../components/Rechart";
import Title from "../../../components/Title";
import SubTitle from "../../../components/SubTitle";
import { useWidth } from "../../../hooks/useWidth";
import Circle from "../../../icons/Circle";

const Chart = () => {
    const {width}=useWidth()
  return (
    <section className={styles.chart}>
      <div className={styles.chartContainer}>
        <Rechart />
        <div className={styles.chartText}>
            <div style={{position:'absolute',top:-80,}}>
            <Circle/>
            </div>
          <div style={{ maxWidth: 574,marginBottom: 30 }}>
            <Title
              text="Fusce placerat enim et odio molestie sagittis"
              fontSize={width < 820 ? 26 : 56}
              color="inherit"
            />
          </div>
          <div style={{ maxWidth: 627,marginBottom:30,}}>
            <SubTitle
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
              color="#585981"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chart;
