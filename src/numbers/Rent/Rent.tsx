import { useRunningNumbers } from "../../hooks/useRunningNumbers";
import styles from './index.module.scss'

const Rent = () => {
  const targetValue = 550;
  const steps = 60;

  const { count,ref } = useRunningNumbers({targetValue,steps});

  return <div ref={ref} className={styles.rent}>{`${count}+`}</div>;
};

export default Rent;
