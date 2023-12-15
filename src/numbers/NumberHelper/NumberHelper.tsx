import { useRunningNumbers } from "../../hooks/useRunningNumbers";
import styles from "./index.module.scss";

interface Props {
  targetValue: number;
  steps: number;
  quantity:string
}

const NumberHelper = ({ targetValue, steps ,quantity}: Props) => {
  const { count, ref } = useRunningNumbers({ targetValue, steps });

  return (
    <div ref={ref} className={styles.supported}>
      {`+${count}${quantity}`}
    </div>
  );
};

export default NumberHelper;
