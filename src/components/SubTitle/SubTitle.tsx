import styles from "./index.module.scss";

interface Props {
  text: string;
  color: string;
  fontSize?: number;
}

const SubTitle = ({ text, color, fontSize }: Props) => {
  return (
    <p
      className={styles.subTitle}
      style={{ color: color, fontSize: fontSize ? fontSize : 22 }}
    >
      {text}
    </p>
  );
};

export default SubTitle;
