import { useRunningNumbers } from "../../hooks/useRunningNumbers";
import styles from "./index.module.scss";

const Sale = () => {
  const targetValue = 300;
  const steps = 60;

  const { count, ref } = useRunningNumbers({ targetValue, steps });

  return <div ref={ref} className={styles.sale}>{`${count}+`}</div>;
};

export default Sale;
