import { ReactNode } from "react";
import styles from "./index.module.scss";
import { useTheme } from "../../hooks/useTheme";
import { useWidth } from "../../hooks/useWidth";

interface Props {
  widthB: number;
  height: number;
  text: string;
  count: ReactNode;
  children: ReactNode;
  top: number;
  right: number;
}

const ResultTotal = ({
  widthB,
  height,
  children,
  count,
  text,
  top,
  right,
}: Props) => {
  const { isDarkTheme } = useTheme();
  const {width}=useWidth()

  return (
    <div
      className={styles.resultTotal}
      style={{
        width: widthB,
        height: height,
        position: width > 1440? "absolute":'relative',
        top: top,
        right: right,
        backgroundColor: isDarkTheme === "light" ? "#FFF" : "#17191C",
      }}
    >
      <div>{children}</div>
      <div>{count}</div>
      <span>{text}</span>
    </div>
  );
};

export default ResultTotal;
