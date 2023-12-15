import { useRunningNumbers } from "../../hooks/useRunningNumbers";
import styles from './index.module.scss'

const Trusted = () => {
  const targetValue = 4;
  const steps = 100;

  const { count,ref } = useRunningNumbers({targetValue,steps});

  return <div ref={ref} className={styles.trusted}>{`${count}.8`}</div>;
};

export default Trusted;
